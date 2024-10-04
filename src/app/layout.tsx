import ScreenSizeIndicator from "@/components/screen-size-indicator";
import { env } from "@/env";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LANGAME test - tg: @ryanpratama14",
  description: "LANGAME test - tg: @ryanpratama1",
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru">
      <body className="bg-white font-lato">
        {env.NODE_ENV === "development" ? <ScreenSizeIndicator /> : null}
        {children}
      </body>
    </html>
  );
}
