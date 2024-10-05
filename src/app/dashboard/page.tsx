import ClientAvatar from "./components/client-avatar";
import ClientBalance from "./components/client-balance";
import ClientSession from "./components/client-session";
import ClientStatus from "./components/client-status";

export default function DashboardPage() {
  return (
    <section className="flex flex-col gap-8 py-12 px-16 h-[90vh]">
      <section className="grid grid-rows-6 grid-cols-3 grid-flow-col gap-8 h-[80%]">
        <ClientAvatar />
        <ClientSession />
        <div className="row-span-3">swiper</div>

        <ClientStatus />
        <ClientBalance />
        <div className="row-span-3">swiper</div>

        <div className="row-span-6">09</div>
      </section>

      <section className="grid grid-cols-5 gap-8 h-[20%]">
        <div className="size-full border-2 border-black flex items-center justify-center flex-col gap-6">1</div>
        <div className="size-full border-2 border-black flex items-center justify-center flex-col gap-6">1</div>
        <div className="size-full border-2 border-black flex items-center justify-center flex-col gap-6">1</div>
        <div className="size-full border-2 border-black flex items-center justify-center flex-col gap-6">1</div>
        <div className="size-full border-2 border-black flex items-center justify-center flex-col gap-6">1</div>
      </section>
    </section>
  );
}
