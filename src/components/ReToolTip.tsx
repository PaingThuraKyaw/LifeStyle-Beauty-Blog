import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const ReTooltip = ({
  children,
  icon,
}: {
  children: ReactNode;
  icon: React.ReactElement;
}) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent className=" bg-transparent shadow-none border-none">
         {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ReTooltip;
