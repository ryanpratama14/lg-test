import cs from "assets/csgo.webp";
import cp from "assets/cyberpunk.jpg";
import ClientAvatar from "./components/client-avatar";
import ClientBalance from "./components/client-balance";
import ClientBanners from "./components/client-banners";
import ClientCta from "./components/client-cta";
import ClientSession from "./components/client-session";
import ClientStatus from "./components/client-status";
import ClientTariff from "./components/client-tariff";

export default function DashboardPage() {
  return (
    <section className="flex flex-col gap-8 2k:gap-12 4k:gap-20 pt-12 4k:pt-24 px-16 4k:px-24 h-[90vh]">
      <section className="grid grid-rows-6 grid-cols-3 grid-flow-col gap-8 2k:gap-12 4k:gap-20 h-[80%]">
        <ClientAvatar />
        <ClientSession />
        <ClientBanners
          images={[
            { id: 1, src: cs },
            { id: 2, src: cp },
          ]}
        />

        <ClientStatus />
        <ClientBalance />
        <ClientBanners
          images={[
            { id: 1, src: cp },
            { id: 2, src: cs },
          ]}
        />

        <ClientTariff />
      </section>

      <section className="grid grid-cols-5 gap-8 2k:gap-12 4k:gap-20 h-[20%]">
        <ClientCta />
      </section>
    </section>
  );
}
