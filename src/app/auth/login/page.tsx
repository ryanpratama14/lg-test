import LoginForm from "@/app/auth/login/components/login-form";
import Img from "@/components/html/img";
import appstore from "assets/apps-store.png";
import googleplay from "assets/google-play.png";
import logo from "assets/logo.png";
import Link from "next/link";

export default function HomePage() {
  return (
    <article className="flex items-center justify-center min-h-screen">
      <section className="flex items-center justify-center flex-col gap-12 w-[20%]">
        <Img src={logo} alt="" className="w-44 4k:w-72" />
        <LoginForm />

        <section className="text-center space-y-1">
          <p>Если у вас еще нет аккаунта?</p>
          <Link href="/auth/register">
            <b className="text-red">Зарегистрируйтесь</b>
          </Link>
        </section>

        <section className="flex flex-col gap-4 justify-center items-center">
          <p>Установите приложение.</p>
          <section className="flex items-center justify-center gap-6">
            <Img src={appstore} alt="" className="w-40 2k:w-52 4k:w-72" />
            <Img src={googleplay} alt="" className="w-40 2k:w-52 4k:w-72" />
          </section>
        </section>
      </section>
    </article>
  );
}
