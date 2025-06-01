import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter as FontSans} from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Supersqad - Independent Media Agency",
  description: "Developed by Werbex Inc.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          geistSans.variable,
          geistMono.className
        )}>
          <NavBar/>
            <main className="relative flex flex-col min-h-screen">
              {children}
            </main>
          <Footer/>
      </body>
    </html>
  );
}
