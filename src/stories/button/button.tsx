"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JSX } from "react";

interface IconButtonProps extends ButtonProps {
  label?: string;
  icon?: JSX.Element;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
}

export default function IconButton({
  label,
  icon, // Backward compatibility for left icon
  iconLeft,
  iconRight,
  size,
  className,
  ...props
}: IconButtonProps) {
  const hasLeftIcon = !!(iconLeft || icon);
  const hasRightIcon = !!iconRight;
  const hasLabel = !!label;

  const isSingleChild = [hasLeftIcon, hasLabel, hasRightIcon].filter(Boolean).length === 1;
  console.log(className)
  return (
    <Button
      size={size}
      className={cn(
        "flex items-center gap-2 rounded-full",
        isSingleChild && "justify-center", // Center if only 1 child (icon or label)
        className
      )}
      {...props}
    >
      {hasLeftIcon && <span>{iconLeft || icon}</span>}
      {hasLabel && <span>{label}</span>}
      {hasRightIcon && <span>{iconRight}</span>}
    </Button>
  );
}
