"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

const Page = () => {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();

  const trpc = useTRPC();
  const { data: messages } = useQuery(trpc.messages.getMany.queryOptions());
  const createMessage = useMutation(
    trpc.messages.create.mutationOptions({
      onSuccess() {
        toast.success("Message created successfully!");
        queryClient.invalidateQueries({
          queryKey: trpc.messages.getMany.queryKey(),
        });
        setValue("");
      },
      onError() {
        toast.error("Failed to create message.");
      },
    }),
  );

  return (
    <div className="p-4 max-w-7xl mx-auto flex flex-col gap-4">
      <Input
        className="p-4"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        disabled={createMessage.isPending}
        onClick={() => {
          createMessage.mutate({ value: value });
        }}
      >
        Submit
      </Button>

      {JSON.stringify(messages, null, 2)}
    </div>
  );
};

export default Page;
