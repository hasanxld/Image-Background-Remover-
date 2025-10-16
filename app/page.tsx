import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundRemoverTool } from "@/components/background-remover-tool"
import { Zap, Clock, ImageIcon, Layers } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Precision",
      description: "Advanced AI technology ensures accurate background removal with perfect edge detection.",
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Process images in seconds with our optimized cloud infrastructure.",
    },
    {
      icon: ImageIcon,
      title: "High Quality Output",
      description: "Get professional-grade results with transparent PNG output.",
    },
    {
      icon: Layers,
      title: "Human Focused",
      description: "Specialized in removing backgrounds from human portrait images with precision.",
    },
  ]

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      content: "ImgBG has revolutionized my workflow. The accuracy is incredible and it saves me hours every week.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "E-commerce Manager",
      content: "Perfect for product photography. Clean backgrounds in seconds without any manual editing.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      content: "The best background remover I've used. Fast, accurate, and the results are always professional.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Tool Section */}
        <section id="tool" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Remove Image Backgrounds
                <br />
                <span className="text-primary">Instantly with AI</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Professional background removal powered by advanced AI technology. Fast, accurate, and easy to use.
              </p>
            </div>
            <BackgroundRemoverTool />
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need for professional background removal
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border p-6 hover:border-primary transition-colors text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="w-12 h-12 text-primary" strokeWidth={1} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by thousands of professionals worldwide
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-card border border-border p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-primary"
                      >
                        <path d="M10 1l2.5 6.5L19 8l-5 4.5L15.5 19 10 15l-5.5 4L6 12.5 1 8l6.5-.5L10 1z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm mb-4 text-muted-foreground">{review.content}</p>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of professionals using ImgBG for their background removal needs
            </p>
            <Link href="/#tool">
              <button className="bg-background text-foreground px-8 py-4 text-lg font-medium hover:bg-background/90 transition-colors rounded-none">
                Try It Now - It's Free
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
