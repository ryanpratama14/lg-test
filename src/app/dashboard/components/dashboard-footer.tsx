import Img from "@/components/html/img";
import logofont from "assets/logo-font.png";

export default function DashboardFooter() {
  return (
    <footer className="flex justify-end px-16 h-[10vh]">
      <section className="flex items-center gap-2">
        <p>Powered by</p>
        <Img src={logofont} alt="" className="w-24" />
        <b>SOFTWARE</b>
      </section>
    </footer>
  );
}
