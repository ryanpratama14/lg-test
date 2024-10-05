import { cn } from "@/lib/utils";

const DATA = [
  {
    label: "Часовой тариф",
    tariff: "100 ₽",
  },
  {
    label: "Пакет на 3 часа",
    tariff: "270 ₽",
  },
  {
    label: "Пакет на 5 часов",
    tariff: "400 ₽",
  },
  {
    label: "Пакет  “День” (9:00 - 16:00)",
    tariff: "450 ₽",
  },
  {
    label: "Пакет ”Вечер” (16:00 - 22:00)",
    tariff: "450 ₽",
  },
  {
    label: "Пакет “Сутки” 24 часа",
    tariff: "1 450 ₽",
  },
];

export default function ClientTariff() {
  return (
    <section className={cn("rounded-3xl dashboard-box flex flex-col gap-8 4k:gap-14 p-12 4k:p-16 tariff-gradient-bg row-span-6 text-white")}>
      <p className="font-bold uppercase">Тарифы, доступные на данном ПК</p>

      <section className="flex flex-col border-white/50 divide-white/50 divide-y-[1px] border-y-[1px]">
        {DATA.map((e) => (
          <section className="py-8 4k:py-14 flex items-center justify-between" key={e.label}>
            <p className="text-white/75">{e.label}</p>

            <h5>{e.tariff}</h5>
          </section>
        ))}
      </section>
    </section>
  );
}
