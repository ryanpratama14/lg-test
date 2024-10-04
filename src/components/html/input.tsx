import { cn } from "@/lib/utils";
import { Icon } from "@iconify-icon/react";
import errorIcon from "assets/error.png";
import validIcon from "assets/validated.png";
import { type ComponentProps, forwardRef, useId, useState } from "react";
import Img from "./img";

type Props = ComponentProps<"input"> & {
  error: string | undefined;
  placeholder: string;
  icon: string;
  val: string;
  label: string;
  classNameDiv?: string;
  isSubmitted: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ isSubmitted, classNameDiv, label, placeholder, className, error, type, icon, val, ...rest }, ref) => {
    const id = useId();
    const isDirty = val.length;
    const validated = isDirty && !error && isSubmitted;
    const isDate = type === "date";
    const isPassword = type === "password";
    const [showPassword, setShowPassword] = useState(false);

    return (
      <section className={cn("flex flex-col gap-1.5 w-full", classNameDiv)}>
        <section
          className={cn("animate group bg-input relative pl-5 pr-12 flex gap-4 items-center w-full rounded-md border-2 border-transparent", {
            "!border-green outline outline-4 outline-[#F0FAF4]": validated,
            "border-red outline outline-4 outline-[#FDF1F0]": error,
            "pr-32": isPassword,
          })}
        >
          <Icon icon={icon} className="text-gray2" width={30} />
          <section className="relative w-full">
            <input
              autoComplete="off"
              className={cn(
                "z-10 font-bold text-lg placeholder:text-gray w-full outline-none bg-transparent h-20 4k:h-36 animate group-hover:translate-y-2.5 4k:group-hover:translate-y-6",
                className,
                { "translate-y-2.5 4k:translate-y-6": isDirty || isDate },
              )}
              type={type && !isPassword ? type : isPassword && !showPassword ? "password" : "text"}
              {...rest}
              ref={ref}
              id={id}
            />
            <label
              htmlFor={id}
              className={cn("text-gray animate absolute centered group-hover:top-6 4k:group-hover:top-12 text-left w-full", {
                "top-6 4k:top-12": isDirty || isDate,
              })}
            >
              {validated ? label : placeholder}
            </label>
          </section>

          {isPassword && isDirty ? (
            <button type="button" className="absolute right-12 bottom-4 font-bold uppercase text-xs" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Скрыть" : "Показать"}
            </button>
          ) : null}

          {isSubmitted && isDirty ? (
            <Img className="w-5 absolute centered-right -translate-x-4" src={validated ? validIcon : errorIcon} alt="" />
          ) : null}
        </section>
        <small className={cn("uppercase font-bold text-red animate", { "opacity-0 -translate-y-2 -z-10": !error })}>{error}</small>
      </section>
    );
  },
);

Input.displayName = "Input";

export default Input;
