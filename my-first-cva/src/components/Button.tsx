import { cva } from "class-variance-authority";

interface ButtonProps {
  size: "sm" | "md" | "lg";
  intent: "primary" | "secondary" | "danger" | "warning";
  variant: "outlined" | "contained";
}

const buttonVariant = cva("hover:brightness-90 active:brightness-75 rounded", {
  variants: {
    size: {
      sm: "px-2.5 py-0.5 text-sm",
      md: "px-4 py-1.5 text-base",
      lg: "px-6 py-2.5 text-lg",
    },
    intent: {
      primary: "bg-blue-500 ",
      secondary: "bg-gray-600",
      danger: "bg-red-500",
      warning: "bg-yellow-500",
    },
    variant: {
      outlined: "bg-white border",
      contained: "text-white",
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      variant: "outlined",
      className: "border-blue-500 text-blue-500",
    },
    {
      intent: "secondary",
      variant: "outlined",
      className: "border-gray-600 text-gray-600",
    },
    {
      intent: "danger",
      variant: "outlined",
      className: "border-red-500 text-red-500",
    },
    {
      intent: "warning",
      variant: "outlined",
      className: "border-yellow-500 text-yellow-500",
    },
  ],
  defaultVariants: {
    size: "md",
    intent: "primary",
  },
});

function Button({ size, intent, variant }: ButtonProps) {
  return (
    <button className={buttonVariant({ size, intent, variant })}>Button</button>
  );
}

export default Button;
