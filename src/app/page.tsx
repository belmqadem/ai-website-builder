"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [value, setValue] = useState("");

  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess() {
        toast.success("Background job invoked successfully!");
      },
      onError() {
        toast.error("Failed to invoke background job.");
      },
    }),
  );

  return (
    <div className="p-4 max-w-7xl mx-auto flex flex-col gap-4">
      <Input className="p-4" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        disabled={invoke.isPending}
        onClick={() => {
          invoke.mutate({ value: value });
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Page;
