import Button from "@/components/html/button";
import { LOCALE } from "@/lib/utils";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

export default function ClientBalance() {
  return (
    <section className="dashboard-box flex flex-col gap-6 items-center justify-between row-span-2">
      <section className="flex justify-between w-full">
        <p className="uppercase">Основной счет</p>
        <button type="button">
          <Icon icon="tabler:refresh" className="text-3xl 4k:text-5xl" />
        </button>
      </section>

      <section className="flex items-center w-full gap-6 4k:gap-8">
        <h1 className="text-4xl 2k:text-5xl 4k:text-7xl">
          <span className="font-bold">{(15000).toLocaleString(LOCALE)}</span> ₽
        </h1>
        <section className="px-4 4k:px-6 py-2 4k:py-4 rounded-xl bg-[#E8E8E8] 4k:gap-2 flex flex-col">
          <p className="font-bold 2k:!text-3xl 4k:!text-5xl">{(1200).toLocaleString(LOCALE)} ₽</p>
          <small className="2k:text-xl 4k:text-3xl">Бонусный счет</small>
        </section>
      </section>
      <Button className="uppercase">пополнить</Button>
    </section>
  );
}
