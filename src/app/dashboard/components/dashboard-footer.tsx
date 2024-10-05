import Img from "@/components/html/img";
import logofont from "assets/logo-font.png";

export default function DashboardFooter() {
  return (
    <footer className="flex justify-end px-16 4k:px-24 h-[10vh]">
      <section className="flex items-center gap-2 4k:gap-4">
        <p>Powered by</p>
        <Img src={logofont} alt="" className="w-24 2k:w-36 4k:w-52" />
        <b>SOFTWARE</b>
      </section>
    </footer>
  );
}
