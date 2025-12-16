import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fernando Moyano | Software Developer",
  description: "Portfolio profesional de Fernando Moyano - Software Developer especializado en desarrollo Full Stack",
  keywords: ["Fernando Moyano", "Software Developer", "Full Stack", "Python", "Node.js", "React", "Next.js"],
  authors: [{ name: "Fernando Moyano" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: '180x180' }
    ],
  },
  openGraph: {
    title: "Fernando Moyano | Software Developer",
    description: "Portfolio profesional de Fernando Moyano - Software Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/devicon@2.15.1/devicon.min.css"
        />
      </head>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
