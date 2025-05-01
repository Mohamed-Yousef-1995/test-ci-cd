import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import clsx from "clsx";

interface InfoIconProps {
  message: string;
  size?: "sm" | "md" | "lg"; // Size control
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export const InfoIcon: React.FC<InfoIconProps> = ({ message, size = "md" }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className={clsx(sizeClasses[size], "text-muted-foreground cursor-pointer")} />
        </TooltipTrigger>
        <TooltipContent>{message}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
