import type { LANGS } from "@/internationalization";
import type { en } from "@/internationalization/dictionaries/en";

export type Lang = (typeof LANGS)[number];
export type LangTarget = Lang | null | undefined | string;
export type Dictionary = typeof en;
