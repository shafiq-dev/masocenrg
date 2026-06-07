import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bukra = localFont({
  src: "../fonts/29lt-bukra-regular.ttf",
  variable: "--font-bukra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MASCO Energy | Building for Better Life",
  description:
    "Saudi-based EPC and integrated contracting across energy, oil & gas, petrochemical, and industrial infrastructure. Al Khobar, KSA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bukra.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-masco-black">
        {children}
      </body>
    </html>
  );
}
