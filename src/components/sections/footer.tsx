import Img from "@/components/html/img";
import logofont from "assets/logo-font.png";
import { Fragment } from "react";
import Hour from "./hour";

export default function Footer() {
  return (
    <Fragment>
      <section className="flex flex-col items-center justify-center absolute bottom-0 w-full">
        <section className="flex gap-4 4k:gap-6">
          {FOOTER_ITEMS.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </section>

        <section className="flex items-center gap-2 py-6 4k:py-12">
          <p>Powered by</p>
          <Img src={logofont} alt="" className="w-24 2k:w-36 4k:w-52" />
          <b>SOFTWARE</b>
        </section>
      </section>

      <section className="flex gap-4 items-center absolute bottom-6 right-6">
        <button className="font-bold px-1.5 py-1 4k:px-2 4k:py-1.5 rounded-lg border-2 border-grayborder 2k:!text-3xl 4k:!text-4xl" type="button">
          EN
        </button>
        <h1 className="text-4xl 2k:text-6xl 4k:text-7xl font-bold font-nitti">
          <Hour />
        </h1>
      </section>
    </Fragment>
  );
}

const FOOTER_ITEMS = ["Информация", "Вакансии", "Помощь", "Конфиденциальность", "Правила", "FAQ", "Прайс-лист"];
