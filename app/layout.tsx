import type React from "react"
import type { Metadata } from "next"
import { Cardo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cardo",
})

export const metadata: Metadata = {
  title: "ImgBG - Professional Background Remover Tool",
  description:
    "Remove backgrounds from images instantly with AI-powered technology. Fast, accurate, and free background removal tool for professionals and creators.",
  keywords: "background remover, remove background, image editing, AI background removal, photo editor",
  authors: [{ name: "ImgBG" }],
  openGraph: {
    title: "ImgBG - Professional Background Remover Tool",
    description: "Remove backgrounds from images instantly with AI-powered technology.",
    url: "https://imgbg.com",
    siteName: "ImgBG",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ImgBG Background Remover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImgBG - Professional Background Remover Tool",
    description: "Remove backgrounds from images instantly with AI-powered technology.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cardo.variable}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster
            position="top-center"
            expand={true}
            richColors
            closeButton
            toastOptions={{
              style: {
                borderRadius: "0px",
              },
              className: "rounded-none",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
