import { type ClassValue, clsx } from "clsx";
import { templateFormatter } from "input-format";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
export const copyData = <T>(data: T): T => structuredClone(data);

export const onChangePhoneNumber = (value: string) => {
  let rawValue = value.replace(/\D/g, "");
  if (!rawValue) rawValue = "8";
  if (rawValue[0] !== "8") rawValue = `8${rawValue}`;

  return rawValue;
};
export const formatPhoneNumber = templateFormatter("x (xxx) xxx xx xx");

export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const LOCALE = "ru-RU";
export const formatCurrency = (amount: number) => new Intl.NumberFormat(LOCALE, { style: "currency", currency: "RUR" }).format(amount);
