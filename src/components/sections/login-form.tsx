"use client";

import Button from "@/components/html/button";
import Input from "@/components/html/input";
import { ICONS } from "@/lib/constants";
import { formatPhoneNumber, onChangePhoneNumber } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const Schema = z.object({
  phoneNumber: z.string().min(11, "Поле должно содержать 11 цифр"),
  password: z.string().min(4, "Пароль должен быть не менее 4 символов"),
});

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    watch,
    control,
  } = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: { phoneNumber: "", password: "" },
    mode: "all",
  });

  return (
    <form
      onSubmit={handleSubmit((e) => {
        if (e.password === "admin") router.push("/dashboard");
      })}
      className="flex flex-col gap-12 w-96"
    >
      <section className="flex flex-col gap-6">
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, name, value } }) => (
            <Input
              isSubmitted={isSubmitted}
              name={name}
              value={formatPhoneNumber(value).text}
              onChange={(e) => onChange(onChangePhoneNumber(e.target.value))}
              val={value}
              error={errors?.phoneNumber?.message}
              placeholder="Введите номер телефона"
              label="Номер телефона"
              icon={ICONS.phoneNumber}
              maxLength={19}
            />
          )}
        />

        <Input
          isSubmitted={isSubmitted}
          val={watch().password}
          error={errors?.password?.message}
          {...register("password")}
          placeholder="Введите пароль"
          label="Пароль"
          type="password"
          icon={ICONS.password}
        />

        <p className="text-center text-dark">Забыли пароль?</p>
      </section>

      <Button disabled={!Schema.safeParse(watch()).success} type="submit" className="uppercase">
        Войти
      </Button>
    </form>
  );
}
