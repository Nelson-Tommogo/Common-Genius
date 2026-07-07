//import our Applayout component here so we use it vereywhere in our app
import Applayout from "@/src/components/layout/AppLayout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nelson Ochieng Tommogo",
  description: "Senior Software Engineer",
  icons: {
    icon: "https://res.cloudinary.com/df64ucx5w/image/upload/v1782755698/profile_kpktwb.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Applayout>{children}</Applayout>
      </body>
    </html>
  );
}