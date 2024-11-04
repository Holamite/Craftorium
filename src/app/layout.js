import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { AuthProvider } from "../components/AuthContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Craftorium - Multi-Vendor Marketplace",
  description: "Discover unique handcrafted products from various vendors",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AuthProvider>
            {" "}
            {/* Wrap AuthProvider here */}
            <CartProvider>{children}</CartProvider>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
