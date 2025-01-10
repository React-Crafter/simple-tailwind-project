import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mth programmer",
  description: "5jeID43bO9CSfnp_p8PVb4BSmxA1aRZEAZajyRx8j8E",
  keywords: "Mth programmer, Programming team, Mth team's, web Developer, Mth, Programmer",
  openGraph: {
    title: "Mth programmer",
    description: "5jeID43bO9CSfnp_p8PVb4BSmxA1aRZEAZajyRx8j8E",
    images: [
      {
        url: "https://mth-programmer.netlify.app/img/hero-img.png",
        alt: "Hero image of Mth Programmer team",
      },
      {
        url: "https://mth-programmer.netlify.app/img/frontEnd.png",
        alt: "Frontend development services by Mth Programmer",
      },
      {
        url: "https://mth-programmer.netlify.app/img/backEnd.png",
        alt: "Backend development services by Mth Programmer",
      },
      {
        url: "https://mth-programmer.netlify.app/img/javascript.png",
        alt: "JavaScript expertise of Mth Programmer",
      },
    ],
    url: "https://mth-programmer.netlify.app/"
  },
  twitter: {
    title: "Mth programmer",
    description: "5jeID43bO9CSfnp_p8PVb4BSmxA1aRZEAZajyRx8j8E",
    images: ["img/hero-img.png"],
    card: "summary_large_image",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
