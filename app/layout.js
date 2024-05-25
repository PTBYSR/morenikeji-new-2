import { Manrope, Abril_Fatface} from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav/Nav";

const inter = Manrope({ subsets: ["latin"] });
const fatface = Abril_Fatface({ subsets: ["latin"],weight: ["400"], });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Nav/>
        
        {children}</body>
    </html>
  );
}
