import { cn } from "@/lib/utils";
import { Icon } from "@iconify-icon/react";
import errorIcon from "assets/error.png";
import validIcon from "assets/validated.png";
import { type ComponentProps, forwardRef, useId } from "react";
import Img from "./img";

type Props = ComponentProps<"select"> & {
  error: string | undefined;
  placeholder: string;
  icon: string;
  val: string;
  label: string;
  classNameDiv?: string;
  options: React.ReactNode;
  isSubmitted: boolean;
  isSubmitSuccessful: boolean;
};

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ isSubmitted, isSubmitSuccessful, classNameDiv, label, placeholder, className, error, icon, val, options, ...rest }, ref) => {
    const id = useId();
    const isDirty = val.length;
    const validated = isDirty && !error && isSubmitted && !isSubmitSuccessful;

    return (
      <section className={cn("flex flex-col gap-1.5 w-full", classNameDiv)}>
        <section
          className={cn(
            "animate group bg-input relative pl-5 4k:pl-8 pr-10 flex gap-4 4k:gap-8 items-center w-full rounded-lg 4k:rounded-2xl border-2 border-transparent",
            {
              "border-green outline outline-4 outline-[#F0FAF4] bg-white": validated,
              "border-red outline outline-4 outline-[#FDF1F0]": error,
              "bg-white": isSubmitted,
            },
          )}
        >
          <Icon icon={icon} className="text-gray2 text-3xl 4k:text-5xl" />
          <section className="relative w-full">
            <select
              id={id}
              {...rest}
              ref={ref}
              className={cn(
                "z-10 -translate-x-1 font-bold text-lg placeholder:text-gray w-full outline-none bg-transparent h-20 2k:h-24 4k:h-36 animate group-hover:translate-y-2.5 group-hover:2k:translate-y-4 4k:group-hover:translate-y-6",
                className,
                { "translate-y-2.5 2k:translate-y-4 4k:translate-y-6": isDirty },
              )}
            >
              {options}
            </select>
            <label
              htmlFor={id}
              className={cn("text-gray animate absolute centered group-hover:top-6 2k:group-hover:top-7 4k:group-hover:top-12 text-left w-full", {
                "top-6 2k:top-7 4k:top-12": isDirty,
              })}
            >
              {validated ? label : placeholder}
            </label>
          </section>

          {isSubmitted && !isSubmitSuccessful && isDirty ? (
            <Img
              className="w-5 2k:size-6 4k:size-10 absolute centered-right -translate-x-4 4k:-translate-x-6"
              src={validated ? validIcon : errorIcon}
              alt=""
            />
          ) : null}
        </section>
        <small className={cn("uppercase font-bold text-red animate", { "opacity-0 -translate-y-2 -z-10": !error })}>{error}</small>
      </section>
    );
  },
);

Select.displayName = "Select";

export default Select;
