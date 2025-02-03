import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import Container from "@/components/ui/container";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nooro TodoApp",
  description: "TodoApp built with NextJS and NodeJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-appGray antialiased`}
      >
        <div className="
          flex
          h-50
          text-[40px]   
          bg-headerBlack
          text-customBlue 
          font-extrabold 
          justify-center 
          items-center
        ">
          <img
            src="rocket.svg"
            alt="an icon depicting a rocketship"
            className="mr-2 object-contain"
          />
          Todo <span className="text-customPurple">App</span>
        </div>        
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
