"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const trpc = useTRPC();

  const createProject = useMutation(
    trpc.projects.create.mutationOptions({
      onSuccess: (data) => {
        router.push(`/projects/${data.id}`);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="px-8 w-full max-w-3xl mx-auto flex flex-col gap-y-4">
        <Input
          className="p-4 w-full block"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          disabled={createProject.isPending}
          onClick={() => {
            createProject.mutate({ value: value });
          }}
          className="cursor-pointer"
        >
          Submit
        </Button>
      </div>
    </main>
  );
};

export default Page;
