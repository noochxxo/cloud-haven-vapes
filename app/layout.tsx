import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Haven Vapes",
  description: "Cloud Haven Vapes - Your Premier Destination for High-Quality Vape Products. Explore our extensive selection of top-rated e-liquids, cutting-edge devices, and accessories. Elevate your vaping experience with our curated collection, crafted to satisfy every palate and preference. Discover the perfect blend of flavor, performance, and style. Shop now and immerse yourself in the ultimate vaping journey with Cloud Haven Vapes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
