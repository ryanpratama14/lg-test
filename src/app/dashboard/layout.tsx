import DashboardFooter from "@/app/dashboard/components/dashboard-footer";
import DashboardMenus from "@/app/dashboard/components/dashboard-menus";

type Props = { children: React.ReactNode };

export default function DashboardLayout({ children }: Props) {
  return (
    <article className="flex h-screen">
      <DashboardMenus />
      <div className="flex-grow overflow-auto bg-white">
        <article className="bg-silver rounded-[4rem] flex flex-col justify-between max-h-screen">
          {children}
          <DashboardFooter />
        </article>
      </div>
    </article>
  );
}
