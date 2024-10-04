import RegistrationForm from "@/components/sections/registration-form";
import { ICONS } from "@/lib/constants";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <article className="min-h-screen flex flex-col gap-12 items-center justify-center">
      <h1 className="font-bold text-4xl">Регистрация</h1>
      <section className="w-full flex flex-col gap-10 lg:w-[40%]">
        <RegistrationForm />
        <Link
          href="/auth/login"
          className="group font-bold h-12 4k:h-16 flex gap-2 items-center justify-center border-2 border-black text-black bg-white uppercase w-full rounded-full"
        >
          <Icon icon={ICONS.arrow} rotate={1} width={25} className="animate group-hover:-translate-x-1" />

          <span>вернутся на главную</span>
        </Link>
      </section>
    </article>
  );
}
