import { inngest } from "./client";

// Imagine this is a function that does some work in the background, like downloading a file, transcribing it, and summarizing it.
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Imagine this is a download step
    await step.sleep("wait-a-moment", "10s");

    // Imagine this is a transcription step
    await step.sleep("wait-a-moment", "5s");

    // Imagine this is a summarization step
    await step.sleep("wait-a-moment", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);
