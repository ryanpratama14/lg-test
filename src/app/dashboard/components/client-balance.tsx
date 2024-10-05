import Button from "@/components/html/button";
import { LOCALE } from "@/lib/utils";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

export default function ClientBalance() {
  return (
    <section className="dashboard-box flex flex-col gap-6 items-center row-span-2">
      <section className="flex items-center justify-between w-full">
        <p className="uppercase">Основной счет</p>
        <button type="button">
          <Icon icon="tabler:refresh" width={30} />
        </button>
      </section>

      <section className="flex items-center w-full gap-6">
        <h1 className="text-4xl">
          <span className="font-bold">{(15000).toLocaleString(LOCALE)}</span> ₽
        </h1>
        <section className="px-4 py-2 rounded-xl bg-[#E8E8E8]">
          <p className="font-bold">{(1200).toLocaleString(LOCALE)} ₽</p>
          <small>Бонусный счет</small>
        </section>
      </section>
      <Button className="uppercase">пополнить</Button>
    </section>
  );
}
