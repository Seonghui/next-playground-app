import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// NOTE: 클라이언트 컴포넌트로 사용 불가능
export default function RootLayout({
  children,
  modals,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  modals: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <AntdRegistry>
            {children}
            {modals}
            <div id="modal-root" />
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
