"use client";

import Button from "@/components/html/button";
import Input from "@/components/html/input";
import Select from "@/components/html/select";
import { ICONS } from "@/lib/constants";
import { cn, formatPhoneNumber, onChangePhoneNumber } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const DOCUMENTS_TYPE = ["Паспорт РФ", "Паспорт иностранного гражданина"] as const;
const REGISTRATION_TYPE = ["Полная", "Упрощенная"] as const;

const fullNamePattern = /^[A-Za-zА-Яа-яЁё]{1,}\s[A-Za-zА-Яа-яЁё]{1,}\s[A-Za-zА-Яа-яЁё]{1,}$/;

const Schema = z
  .object({
    fullName: z
      .string()
      .min(9, "Поле должно содержать ваше ФИО")
      .regex(fullNamePattern, "ФИО должно состоять из трех частей, разделенных пробелами (например, 'Иванов Иван Иванович')"),
    password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
    confirmPassword: z.string().min(6, "Пароль должен быть не менее 6 символов"),
    phoneNumber: z.string().min(11, "Поле должно содержать 11 цифр"),
    serialNumber: z.string().min(10, "Поле должно содержать 10 символов"),
    dateOfBirth: z.string().min(1, "Укажите дату рождения"),
    document: z.enum(DOCUMENTS_TYPE),
    agreed: z.boolean(),
    type: z.enum(REGISTRATION_TYPE),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Пароль и подтверждение пароля не совпадают",
    path: ["confirmPassword"],
  })
  .refine(({ agreed }) => agreed, {
    message: "Отметьте это, чтобы продолжить",
    path: ["agreed"],
  });

export default function RegistrationForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    watch,
    setValue,
    trigger,
    control,
  } = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      fullName: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      serialNumber: "",
      dateOfBirth: "",
      document: "Паспорт РФ",
      agreed: false,
      type: "Полная",
    },
  });

  const password = watch("password");

  useEffect(() => {
    if (!isSubmitted) return;
    password && trigger("confirmPassword");
  }, [password, trigger, isSubmitted]);

  return (
    <form onSubmit={handleSubmit(() => router.push("/dashboard"))} className="flex flex-col gap-10">
      <section className="col-span-2 flex gap-2 items-center justify-center">
        <section className="grid grid-cols-2 gap-6 w-[70%]">
          {REGISTRATION_TYPE.map((e) => {
            const isSelected = watch().type === e;
            return (
              <button
                type="button"
                key={e}
                onClick={() => setValue("type", e)}
                className={cn(
                  "uppercase animate flex items-center justify-center relative text-gray3 bg-input w-full h-12 2k:h-16 4k:h-20 rounded-full",
                  {
                    "bg-red text-white button-shadow-gray": isSelected,
                  },
                )}
              >
                <b>{e}</b>

                {isSelected ? (
                  <Icon icon={ICONS.info} className="absolute centered-right -translate-x-4 2k:-translate-x-6 text-3xl 2k:text-4xl" />
                ) : null}
              </button>
            );
          })}
        </section>
      </section>

      <section className="grid grid-cols-2 gap-6">
        <Input
          isSubmitSuccessful={isSubmitSuccessful}
          isSubmitted={isSubmitted}
          classNameDiv="col-span-2"
          val={watch().fullName}
          error={errors?.fullName?.message}
          {...register("fullName")}
          placeholder="ФИО"
          label="ФИО"
          icon={ICONS.fullName}
        />

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, name, value } }) => (
            <Input
              isSubmitSuccessful={isSubmitSuccessful}
              isSubmitted={isSubmitted}
              name={name}
              value={formatPhoneNumber(value).text}
              onChange={(e) => onChange(onChangePhoneNumber(e.target.value))}
              val={value}
              error={errors?.phoneNumber?.message}
              placeholder="Номер телефона"
              label="Номер телефона"
              icon={ICONS.phoneNumber}
              maxLength={19}
            />
          )}
        />

        <Input
          isSubmitSuccessful={isSubmitSuccessful}
          isSubmitted={isSubmitted}
          type="date"
          maxLength={10}
          val={watch().dateOfBirth}
          error={errors?.dateOfBirth?.message}
          {...register("dateOfBirth")}
          placeholder="Дата рождения"
          label="Дата рождения"
          icon={ICONS.date}
        />

        <Select
          isSubmitSuccessful={isSubmitSuccessful}
          isSubmitted={isSubmitted}
          {...register("document")}
          placeholder="Документ"
          label="Документ"
          icon={ICONS.document}
          val={watch().document}
          error={errors?.document?.message}
          options={DOCUMENTS_TYPE.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        />

        <Input
          isSubmitSuccessful={isSubmitSuccessful}
          isSubmitted={isSubmitted}
          maxLength={10}
          val={watch().serialNumber}
          error={errors?.serialNumber?.message}
          {...register("serialNumber")}
          placeholder="Укажите 10 цифр серия и номер"
          label="Укажите 10 цифр серия и номер"
          icon={ICONS.serialNumber}
        />

        <Input
          isSubmitSuccessful={isSubmitSuccessful}
          isSubmitted={isSubmitted}
          type="password"
          val={watch().password}
          error={errors?.password?.message}
          {...register("password")}
          placeholder="Укажите пароль"
          label="Укажите пароль"
          icon={ICONS.password}
        />

        <Input
          isSubmitSuccessful={isSubmitSuccessful}
          isSubmitted={isSubmitted}
          type="password"
          val={watch().confirmPassword}
          error={errors?.confirmPassword?.message}
          {...register("confirmPassword")}
          placeholder="Повторите пароль"
          label="Повторите пароль"
          icon={ICONS.password}
        />
      </section>

      <section className="flex flex-col gap-4">
        <section className="flex flex-col gap-1.5">
          <section className="flex gap-4 items-center">
            <button
              type="button"
              className={cn("flex items-center justify-start px-1 relative bg-input rounded-full w-14 h-8 2k:w-20 2k:h-12", {
                "justify-end": watch().agreed,
              })}
              onClick={() => {
                setValue("agreed", !watch().agreed);
                isSubmitted && trigger("agreed");
              }}
            >
              <div
                className={cn("flex animate items-center justify-center size-6 2k:size-10 rounded-full", {
                  "bg-red text-white": watch().agreed,
                })}
              >
                <Icon icon={ICONS.check} className="text-xl 2k:text-4xl" />
              </div>
            </button>
            <p>Я даю свое право на информационную рассылку</p>
          </section>

          <small className={cn("uppercase font-bold text-red animate", { "opacity-0 -translate-y-2 -z-10": !errors?.agreed?.message })}>
            {errors?.agreed?.message}
          </small>
        </section>

        <Button type="submit" className="uppercase">
          зарегистрироваться
        </Button>
      </section>
    </form>
  );
}
