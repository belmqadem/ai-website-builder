"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type Direction = "top" | "right" | "bottom" | "left";
type Position = "start" | "center" | "end";

interface HintProps {
  children: React.ReactNode;
  text: string;
  side?: Direction;
  align?: Position;
}

const Hint = ({
  children,
  text,
  side = "top",
  align = "center",
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
