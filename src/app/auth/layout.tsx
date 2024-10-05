import Img from "@/components/html/img";
import Footer from "@/components/sections/footer";
import rectangle_left from "assets/rectangle-left-bg-logo.png";
import rectangle_right from "assets/rectangle-right-bg-logo.png";

type Props = { children: React.ReactNode };

export default function AuthLayout({ children }: Props) {
  return (
    <main className="relative">
      {children}

      <section className="font-bold font-nitti text-center absolute top-12 left-12">
        <h1 className="text-9xl 4k:text-[12rem]">23</h1>
        <p className="text-4xl 2k:!text-5xl 4k:!text-6xl">Стандарт</p>
      </section>

      <Img src={rectangle_left} className="absolute bottom-0 left-0 w-56" alt="" />
      <Img src={rectangle_right} className="absolute top-0 right-0 w-56" alt="" />

      <Footer />
    </main>
  );
}
