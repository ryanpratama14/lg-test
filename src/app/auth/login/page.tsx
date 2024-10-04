import Img from "@/components/html/img";
import LoginForm from "@/components/sections/login-form";
import appstore from "assets/apps-store.png";
import googleplay from "assets/google-play.png";

import logo from "assets/logo.png";
import Link from "next/link";

export default function HomePage() {
  return (
    <article className="flex items-center justify-center min-h-screen">
      <section className="flex items-center justify-center flex-col gap-12">
        <Img src={logo} alt="" className="w-44" />
        <LoginForm />

        <section className="text-center space-y-1">
          <p>Если у вас еще нет аккаунта?</p>
          <Link href="/auth/register">
            <b className="text-red">Зарегистрируйтесь</b>
          </Link>
        </section>

        <section className="flex flex-col gap-4 justify-center items-center">
          <p>Установите приложение.</p>
          <section className="flex items-center justify-center gap-2">
            <Img src={appstore} alt="" className="w-36" />
            <Img src={googleplay} alt="" className="w-36" />
          </section>
        </section>
      </section>
    </article>
  );
}
