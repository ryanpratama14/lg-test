"use client";

import Button from "@/components/html/button";
import Input from "@/components/html/input";
import { ICONS } from "@/lib/constants";
import { formatPhoneNumber, onChangePhoneNumber } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Select from "../html/select";

const DOCUMENTS_TYPE = ["Паспорт РФ", "Паспорт иностранного гражданина"] as const;

const Schema = z
  .object({
    fullName: z.string().min(9, "Поле должно содержать ваше ФИО"),
    password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
    confirmPassword: z.string().min(6, "Пароль должен быть не менее 6 символов"),
    phoneNumber: z.string().min(11, "Поле должно содержать 11 цифр"),
    serialNumber: z.string().min(10, "Поле должно содержать 10 символов"),
    dateOfBirth: z.string().min(1, "Укажите дату рождения"),
    document: z.enum(DOCUMENTS_TYPE),
    agreed: z.boolean(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Пароль и подтверждение пароля не совпадают",
    path: ["confirmPassword"],
  });

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
    },
  });

  return (
    <form
      onSubmit={handleSubmit((e) => {
        console.log(e);
      })}
      className="w-[50%] grid gap-6 grid-cols-2"
    >
      <Input
        classNameDiv="col-span-2"
        val={watch().fullName}
        error={errors?.fullName?.message}
        {...register("fullName")}
        placeholder="ФИО"
        label="ФИО"
        icon={ICONS.password}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { onChange, name, value } }) => (
          <Input
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
        type="date"
        maxLength={10}
        val={watch().dateOfBirth}
        error={errors?.dateOfBirth?.message}
        {...register("dateOfBirth")}
        placeholder="Дата рождения"
        label="Дата рождения"
        icon={ICONS.password}
      />

      <Select
        {...register("document")}
        placeholder="Документ"
        label="Документ"
        icon={ICONS.password}
        val={watch().document}
        error={errors?.document?.message}
        options={DOCUMENTS_TYPE.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      />

      <Input
        maxLength={10}
        val={watch().serialNumber}
        error={errors?.serialNumber?.message}
        {...register("serialNumber")}
        placeholder="Укажите 10 цифр серия и номер"
        label="Укажите 10 цифр серия и номер"
        icon={ICONS.password}
      />

      <Input
        type="password"
        val={watch().password}
        error={errors?.password?.message}
        {...register("password")}
        placeholder="Укажите пароль"
        label="Укажите пароль"
        icon={ICONS.password}
      />

      <Input
        type="password"
        val={watch().confirmPassword}
        error={errors?.confirmPassword?.message}
        {...register("confirmPassword")}
        placeholder="Повторите пароль"
        label="Повторите пароль"
        icon={ICONS.password}
      />

      <Button type="submit" className="uppercase col-span-2">
        зарегистрироваться
      </Button>
    </form>
  );
}
