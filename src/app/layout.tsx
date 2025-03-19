import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theresa Asamoah | Fashion Designer & Creative Visionary",
  description:
    "This is the portfolio of Theresa Asamoah - a creative and detail-oriented professional showcasing expertise in design, development, and innovative digital experiences. Discover projects that blend aesthetics with functionality. Let's create something amazing together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-clash antialiased text-gray-600`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
