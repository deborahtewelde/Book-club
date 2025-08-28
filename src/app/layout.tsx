import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        //flex flex-col min-h-screen på body gjør at siden alltid er minst like høy som skjermen.
        className="flex flex-col min-h-screen bg-blue-50 antialiased"
      >
        {/*Navbar */}
        <nav className="w-full bg-gray-100 p-4 flex gap-10">
          <Link href="/" className="font-bold hover:underline">
            Hjem
          </Link>
          <Link href="/blog" className=" hover:underline">
            Blogg
          </Link>
          <Link href="/Om-oss" className=" hover:underline">
            Om oss
          </Link>
        </nav>
        {children}
        {/* Footer */}
        <footer className="w-full bg-gray-100 p-4 text-center fixed bottom-0">
          © {new Date().getFullYear()} Bokklubb
        </footer>
      </body>
    </html>
  );
}
