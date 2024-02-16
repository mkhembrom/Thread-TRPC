import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Header from "./_components/header/header";
import Footer from "./_components/footer";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/lib/theme-provider";
import { Suspense } from "react";
import Loading from "./loading";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative h-full min-h-screen w-screen overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<Loading />}>
              <div className="sticky left-0 right-0 top-0 z-50">
                <Header />
              </div>
              <div className="grid h-full min-h-screen grid-cols-3 ">
                <div></div>
                <div className="mx-auto  flex h-full w-[580px] flex-col px-4">
                  {children}
                </div>
                <div></div>
              </div>
              <div>
                <Footer />
              </div>
            </Suspense>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
