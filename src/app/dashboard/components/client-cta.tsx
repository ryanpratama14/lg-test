import game from "assets/icons/game.svg";
import home from "assets/icons/home.svg";
import logout from "assets/icons/logout.svg";
import problem from "assets/icons/problem.svg";
import session from "assets/icons/session.svg";
import Image from "next/image";

const DATA = [
  {
    color: "#F6FBFF",
    label: "вернутся на рабочий стол",
    src: home,
  },
  {
    color: "#F8F0FF",
    label: "выбрать игру",
    src: game,
  },
  {
    color: "#FFFEEE",
    label: "Сообщить о проблеме",
    src: problem,
  },
  {
    color: "#F0FFF9",
    label: "Продлить сессию",
    src: session,
  },
  {
    color: "#FFEDED",
    label: "завершить сессию",
    src: logout,
  },
];

export default function ClientCta() {
  return DATA.map((e) => {
    return (
      <button
        type="button"
        style={{ backgroundColor: e.color }}
        key={e.label}
        className="hover:scale-105 px-6 animate button-shadow-cta rounded-3xl flex flex-col items-center justify-center text-center py-8 gap-6 4k:gap-12"
      >
        <Image src={e.src} alt="" className="2k:scale-125 4k:w-16" />
        <p className="font-bold uppercase">{e.label}</p>
      </button>
    );
  });
}
