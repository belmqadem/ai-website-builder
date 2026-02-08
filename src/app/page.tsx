import { Button } from "@/src/components/ui/button";

const Page = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button className="mt-4" variant="outline">
        Click me
      </Button>
    </div>
  );
};

export default Page;
