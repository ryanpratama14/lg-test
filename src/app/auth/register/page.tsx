import RegistrationForm from "@/app/auth/register/components/registration-form";
import { ICONS } from "@/lib/constants";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <article className="min-h-screen flex flex-col gap-12 items-center justify-center">
      <h1 className="font-bold text-4xl 2k:text-5xl 4k:text-7xl">Регистрация</h1>
      <section className="w-full flex flex-col gap-10 px-12 lg:w-[50rem] 2k:w-[37.5%]">
        <RegistrationForm />
        <Link
          href="/auth/login"
          className="group font-bold h-12 2k:h-16 4k:h-20 flex gap-2 items-center justify-center border-2 border-black text-black bg-white uppercase w-full rounded-full"
        >
          <Icon icon={ICONS.arrow} rotate={1} className="animate group-hover:-translate-x-1 text-2xl 2k:text-4xl" />

          <span>вернутся на главную</span>
        </Link>
      </section>
    </article>
  );
}
