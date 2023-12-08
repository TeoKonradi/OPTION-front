import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "../ui";

const buttonVariants = cva(
  "inline-flex items-center shadow-xs text-center justify-center text-sm font-medium transition-colors focus-visible:outline-none  focus-visible:ring-none disabled:opacity-50 disabled:grayscale-[20%] disabled:pointer-events-none border-2 border-main",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 py-2 px-3",
        icon: "h-10 w-10",
        lg: "h-14 px-8 text-lg",
        sm: "h-9 px-3",
      },
      variant: {
        default:
          "text-main bg-white hover:text-white hover:bg-main active:bg-main/90 text-2xl",
        destructive:
          "text-white bg-main bg-white hover:bg-white hover:text-main active:bg-main/90",
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

const LoadingButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { isLoading: boolean }
>(
  (
    {
      asChild = false,
      children,
      className,
      disabled,
      isLoading,
      size,
      variant,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    );
  },
);
LoadingButton.displayName = "LoadingButton";

export { Button, LoadingButton, buttonVariants };
