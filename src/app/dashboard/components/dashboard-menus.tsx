"use client";

import Img from "@/components/html/img";
import { Icon } from "@iconify-icon/react";
import logo from "assets/logo.png";

export default function DashboardMenus() {
  return (
    <aside className="w-72 sticky top-0 h-screen flex items-center flex-col gap-10 py-20">
      <Img src={logo} alt="Logo" className="w-[50%]" />

      <section className="flex flex-col divide-y-2 divide-divide border-y-2 border-divide w-full">
        {DASHBOARD_MENUS.map((e) => {
          return (
            <button key={e.icon} type="button" className="group flex flex-col items-center justify-center gap-4 py-10 hover:bg-silver animate">
              <section className="relative">
                <Icon icon={e.icon} width={30} className="text-grayIcon animate group-hover:scale-125" />
                {e.notifications ? <div className="absolute -top-3 -right-3 size-2 rounded-full bg-red" /> : null}
              </section>
              <b>{e.label}</b>
            </button>
          );
        })}
      </section>
    </aside>
  );
}

const DASHBOARD_MENUS = [
  { label: "История транзакций", icon: "grommet-icons:transaction", notifications: true },
  { label: "Забронировать", icon: "maki:gaming", notifications: false },
  { label: "Настройки", icon: "mingcute:settings-2-line", notifications: false },
  { label: "Поддержка", icon: "quill:chat", notifications: true },
];
