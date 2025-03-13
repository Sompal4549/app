import "./globals.css";
// import { Inter } from "next/font/google";
import Providers from "./Provider";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "my app",
  description: "my app",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["my app"],
  authors: [
    { name: "Sompal kumar" },
    {
      name: "Sompal Kumar",
      url: "https://www.linkedin.com/in/sompal-kumar-b62b5022b/",
    },
  ],

  icons: [
    { rel: "apple-touch-icon", url: "/vercel.svg" },
    { rel: "icon", url: "/vercel.svg" },
  ],
};
const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
import { Viewport } from "next";
import { StoreProvider } from "./StoreProvider";

export const viewport: Viewport = {
  themeColor: "black",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
    <StoreProvider>
      <Providers>
        <main>

          {children}
        </main>
          </Providers>
    </StoreProvider>
      </body>
    </html>
  );
}
