import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features - ImgBG Background Remover",
  description:
    "Discover all the powerful features of ImgBG: AI-powered precision, lightning-fast processing, high-quality output, and batch processing capabilities.",
  openGraph: {
    title: "Features - ImgBG Background Remover",
    description: "Explore the powerful features that make ImgBG the best background removal tool.",
    url: "https://imgbg.com/features",
  },
}

export default function FeaturesPage() {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M24 8v32M8 24h32" />
          <circle cx="24" cy="24" r="16" />
        </svg>
      ),
      title: "AI-Powered Precision",
      description:
        "Our advanced machine learning algorithms analyze every pixel to deliver incredibly accurate background removal. The AI understands complex edges, hair strands, and intricate details that traditional tools miss.",
      benefits: [
        "Perfect edge detection",
        "Hair and fur handling",
        "Complex object recognition",
        "Smart color separation",
      ],
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8" />
          <path d="M40 12l-16 16-6-6" />
        </svg>
      ),
      title: "Lightning Fast Processing",
      description:
        "Time is valuable. Our optimized cloud infrastructure processes images in seconds, not minutes. Upload, process, and download - all in the time it takes to grab a coffee.",
      benefits: [
        "Sub-5 second processing",
        "Cloud-based infrastructure",
        "No software installation",
        "Works on any device",
      ],
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="10" y="10" width="28" height="28" />
          <path d="M10 20h28M20 10v28" />
        </svg>
      ),
      title: "High Quality Output",
      description:
        "Professional results every time. Get crisp, clean transparent PNG files ready for any use case - from e-commerce to graphic design to social media.",
      benefits: ["Transparent PNG output", "Original resolution maintained", "No quality loss", "Print-ready results"],
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="12" y="8" width="24" height="32" />
          <path d="M16 14h16M16 20h16M16 26h16" />
        </svg>
      ),
      title: "Batch Processing",
      description:
        "Need to process multiple images? Our batch processing feature lets you remove backgrounds from dozens of images at once, saving you hours of manual work.",
      benefits: ["Process multiple images", "Consistent results", "Time-saving automation", "Bulk download"],
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="8" y="12" width="32" height="24" />
          <path d="M16 12V8M32 12V8M8 20h32" />
        </svg>
      ),
      title: "Easy to Use Interface",
      description:
        "No learning curve required. Our intuitive interface makes background removal as simple as drag, drop, and download. Anyone can use it, regardless of technical skill.",
      benefits: ["Drag and drop upload", "One-click processing", "Instant preview", "Simple download"],
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="10" y="10" width="28" height="28" />
          <circle cx="24" cy="24" r="8" />
          <path d="M24 16v-6M24 38v-6M32 24h6M10 24h6" />
        </svg>
      ),
      title: "Multiple Export Options",
      description:
        "Download your images in various formats and sizes. Whether you need web-optimized files or high-resolution prints, we've got you covered.",
      benefits: ["PNG with transparency", "Multiple resolutions", "Optimized file sizes", "Custom dimensions"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Powerful Features for
                <br />
                <span className="text-primary">Professional Results</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Everything you need to remove backgrounds like a pro, all in one simple tool
              </p>
            </div>

            <div className="space-y-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="text-primary mb-6">{feature.icon}</div>
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-primary mr-3 flex-shrink-0"
                          >
                            <path d="M16 6L7.5 14.5 4 11" />
                          </svg>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="bg-muted/30 border border-border p-12 flex items-center justify-center aspect-square">
                      <div className="text-center text-muted-foreground">
                        <svg
                          width="120"
                          height="120"
                          viewBox="0 0 120 120"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="mx-auto"
                        >
                          <rect x="20" y="20" width="80" height="80" />
                          <path d="M20 60h80M60 20v80" />
                          <circle cx="60" cy="60" r="20" />
                        </svg>
                        <p className="mt-4 text-sm">Feature Illustration</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
