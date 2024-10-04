import Img from "@/components/html/img";
import logofont from "assets/logo-font.png";
import { Fragment } from "react";
import Hour from "./hour";

export default function Footer() {
  return (
    <Fragment>
      <section className="flex flex-col items-center justify-center absolute bottom-0 w-full">
        <section className="flex gap-4">
          {FOOTER_ITEMS.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </section>

        <section className="flex items-center gap-2 py-6">
          <p>Powered by</p>
          <Img src={logofont} alt="" className="w-24" />
          <b>SOFTWARE</b>
        </section>
      </section>

      <section className="flex gap-4 items-center absolute bottom-6 right-6">
        <button className="font-bold px-1.5 py-1 rounded-lg border-2 border-grayborder" type="button">
          EN
        </button>
        <h1 className="text-4xl 2k:text-5xl font-bold font-nitti">
          <Hour />
        </h1>
      </section>
    </Fragment>
  );
}

const FOOTER_ITEMS = ["Информация", "Вакансии", "Помощь", "Конфиденциальность", "Правила", "FAQ", "Прайс-лист"];
