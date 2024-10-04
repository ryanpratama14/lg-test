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
};

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ isSubmitted, classNameDiv, label, placeholder, className, error, icon, val, options, ...rest }, ref) => {
    const id = useId();
    const isDirty = val.length;
    const validated = isDirty && !error && isSubmitted;

    return (
      <section className={cn("flex flex-col gap-1.5 w-full", classNameDiv)}>
        <section
          className={cn("animate group bg-input relative pl-5 pr-12 flex gap-4 items-center w-full rounded-md border-2 border-transparent", {
            "border-green outline outline-4 outline-[#F0FAF4]": validated,
            "border-red outline outline-4 outline-[#FDF1F0]": error,
          })}
        >
          <Icon icon={icon} className="text-gray2" width={30} />
          <section className="relative w-full">
            <select
              {...rest}
              ref={ref}
              className={cn(
                "z-10 -translate-x-1 font-bold text-lg placeholder:text-gray w-full outline-none bg-transparent h-20 animate group-hover:translate-y-2.5",
                className,
                { "translate-y-2.5": isDirty },
              )}
            >
              {options}
            </select>
            <label htmlFor={id} className={cn("text-gray animate absolute centered group-hover:top-6 text-left w-full", { "top-6": isDirty })}>
              {validated ? label : placeholder}
            </label>
          </section>

          {isSubmitted ? <Img className="w-5 absolute centered-right -translate-x-4" src={validated ? validIcon : errorIcon} alt="" /> : null}
        </section>
        <small className={cn("uppercase font-bold text-red animate", { "opacity-0 -translate-y-2 -z-10": !error })}>{error}</small>
      </section>
    );
  },
);

Select.displayName = "Select";

export default Select;
