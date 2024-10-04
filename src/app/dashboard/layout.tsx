import Img from "@/components/html/img";
import logo from "assets/logo.png";

type Props = { children: React.ReactNode };

export default function DashboardLayout({ children }: Props) {
  return (
    <article>
      <aside className="h-screen left-0 sticky w-96 flex flex-col pt-12">
        <Img src={logo} alt="" className="w-44" />
      </aside>
      {children}
    </article>
  );
}
