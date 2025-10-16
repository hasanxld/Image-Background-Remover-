import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - ImgBG Background Remover",
  description:
    "Learn about ImgBG, our mission to provide the best AI-powered background removal tool for professionals and creators worldwide.",
  openGraph: {
    title: "About Us - ImgBG Background Remover",
    description: "Learn about ImgBG and our mission to revolutionize image editing.",
    url: "https://imgbg.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance">About ImgBG</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-xl leading-relaxed">
                ImgBG is a cutting-edge background removal tool powered by advanced artificial intelligence. We're on a
                mission to make professional image editing accessible to everyone.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Our Story</h2>
              <p className="leading-relaxed">
                Founded in 2024, ImgBG was born from a simple observation: removing backgrounds from images was too
                time-consuming and required expensive software or technical skills. We believed there had to be a better
                way.
              </p>

              <p className="leading-relaxed">
                Our team of AI engineers and designers worked tirelessly to create a tool that combines cutting-edge
                machine learning with an intuitive user interface. The result is ImgBG - a platform that delivers
                professional results in seconds, not hours.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                We believe that powerful image editing tools should be accessible to everyone, regardless of their
                technical expertise or budget. Our mission is to democratize professional image editing by providing
                fast, accurate, and easy-to-use background removal technology.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Why Choose ImgBG?</h2>
              <ul className="space-y-4 leading-relaxed">
                <li className="flex items-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="mr-3 mt-1 text-primary flex-shrink-0"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    <strong className="text-foreground">AI-Powered Accuracy:</strong> Our advanced algorithms ensure
                    precise edge detection and clean results.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="mr-3 mt-1 text-primary flex-shrink-0"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    <strong className="text-foreground">Lightning Fast:</strong> Process images in seconds with our
                    optimized cloud infrastructure.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="mr-3 mt-1 text-primary flex-shrink-0"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    <strong className="text-foreground">User-Friendly:</strong> No technical skills required - just
                    upload and download.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="mr-3 mt-1 text-primary flex-shrink-0"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    <strong className="text-foreground">Professional Quality:</strong> Get results that rival expensive
                    desktop software.
                  </span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">Join Our Community</h2>
              <p className="leading-relaxed">
                Thousands of designers, photographers, e-commerce businesses, and content creators trust ImgBG for their
                background removal needs. Join our growing community and experience the future of image editing today.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
