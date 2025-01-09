import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mth programmer - Netlify",
  description: "Mth programmer - Netlify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="5jeID43bO9CSfnp_p8PVb4BSmxA1aRZEAZajyRx8j8E" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
