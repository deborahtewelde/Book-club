import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bokklubb",
  description: "App for vi som skal lese noen bøker dette efteråret",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className=" w-full bg-blue-50 antialiased"
      >
        {/*Navbar */}
        <nav className="w-full bg-gray-100 p-4 flex gap-10">
          <a href="/" className="font-bold hover:underline">
            Hjem
          </a>
          <a href="/blog" className=" hover:underline">
            Blogg
          </a>
        </nav>
        {children}
        {/* Footer */}
        <footer className="w-full bg-gray-100 p-4 text-center">
          © {new Date().getFullYear()} Bokklubb
        </footer>
      </body>
    </html>
  );
}
