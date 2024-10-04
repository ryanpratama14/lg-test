import RegistrationForm from "@/components/sections/registration-form";

export default function RegisterPage() {
  return (
    <article className="min-h-screen flex flex-col gap-12 items-center justify-center">
      <h1 className="font-bold text-4xl">Регистрация</h1>
      <RegistrationForm />
    </article>
  );
}
