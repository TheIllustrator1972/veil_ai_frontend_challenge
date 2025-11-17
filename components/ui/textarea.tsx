import * as React from "react";

import { cn } from "@/lib/utils";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  "border-input placeholder:text-muted-foreground focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "focus-visible:border-ring focus-visible:ring-ring/50",
        coral:
          "focus-visible:border-orange-500 focus-visible:ring-orange-500/50 rounded-[4px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface TextareaProps
  extends React.ComponentProps<"textarea">,
    VariantProps<typeof textareaVariants> {
  asChild?: boolean;
}

function Textarea({
  className,
  variant = "default",
  asChild = false,
  ...props
}: TextareaProps) {
  const Comp = asChild ? Slot : "textarea";

  return (
    <Comp
      data-slot="textarea"
      className={cn(textareaVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Textarea, textareaVariants };
