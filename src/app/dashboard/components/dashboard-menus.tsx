"use client";

import Img from "@/components/html/img";
import { Icon } from "@iconify-icon/react";
import logo from "assets/logo.png";

export default function DashboardMenus() {
  return (
    <aside className="w-[28rem] 2k:w-[36rem] 4k:w-[52rem] sticky top-0 h-screen flex items-center flex-col gap-10 4k:gap-16 py-20">
      <Img src={logo} alt="Logo" className="w-[50%]" />

      <section className="flex flex-col divide-y-2 divide-divide border-y-2 border-divide w-full">
        {DASHBOARD_MENUS.map((e) => {
          return (
            <button
              key={e.icon}
              type="button"
              className="group flex flex-col items-center justify-center px-4 gap-4 py-10 4k:py-16 hover:bg-silver animate"
            >
              <section className="relative">
                <Icon icon={e.icon} className="text-grayIcon animate group-hover:scale-125 text-3xl 2k:text-4xl 4k:text-6xl" />
                {e.notifications ? <div className="absolute -top-3 -right-3 size-2 4k:size-4 rounded-full bg-red" /> : null}
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
