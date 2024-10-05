import Img from "@/components/html/img";
import avatar from "assets/avatar.png";

export default function ClientAvatar() {
  return (
    <section className="flex items-center gap-4 py-6">
      <Img src={avatar} className="size-12 rounded-full" alt="" />
      <b>Алексей Костылев Николаевич</b>
    </section>
  );
}
