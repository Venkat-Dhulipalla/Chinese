import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Dragon Restaurant",
  description: "Delicious Chinese cuisine delivered to your doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <header className="bg-primary text-primary-foreground p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Golden Dragon
            </Link>
            <Button variant="secondary" asChild>
              <Link href="/cart">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
              </Link>
            </Button>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-primary text-primary-foreground p-4 mt-8">
          <div className="container mx-auto text-center">
            © 2023 Golden Dragon Restaurant. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
