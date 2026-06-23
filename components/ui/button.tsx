import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-semibold tracking-tight ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:duration-75 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform",
  {
    variants: {
      variant: {
        default:
          "bg-meadow text-cream shadow-soft hover:bg-meadow-mid hover:shadow-lift",
        leaf: "bg-meadow-dark text-cream shadow-soft hover:bg-meadow-deep hover:shadow-lift",
        wheat:
          "bg-wheat text-ink shadow-soft hover:bg-wheat-soft hover:shadow-glow",
        clay: "bg-clay text-cream shadow-soft hover:bg-clay-deep hover:shadow-lift",
        outline:
          "border-2 border-meadow-dark/30 bg-transparent text-meadow-dark hover:border-meadow-dark hover:bg-meadow-dark hover:text-cream",
        ghost: "text-ink hover:bg-meadow-mist/50",
        link: "text-meadow-dark underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-5 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
