import { cn } from "@/lib/utils";
import { type ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(({ disabled, type, children, className, ...rest }, ref) => {
  return (
    <button
      disabled={disabled}
      className={cn("font-bold animate flex items-center justify-center bg-red text-white w-full h-12 2k:h-16 4k:h-20 rounded-full", className, {
        "bg-redDisabled": disabled,
        "button-shadow hover:bg-redHover": !disabled,
      })}
      {...rest}
      ref={ref}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
