import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theresa Asamoah",
  description: "portfilio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-clash antialiased text-gray-600`}
      >
        <div className="">

        {children}
        </div>
      </body>
    </html>
  );
}
