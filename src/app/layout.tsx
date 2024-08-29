import "~/styles/globals.css";
import "~/styles/custom.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Job Platform",
  description: "Built by Danish",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        <TRPCReactProvider>
          <div>
            <div className="grid-background"></div>
            {children}
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
