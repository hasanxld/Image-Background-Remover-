import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reviews - ImgBG Background Remover",
  description:
    "Read what our customers say about ImgBG. Trusted by thousands of designers, photographers, and businesses worldwide.",
  openGraph: {
    title: "Reviews - ImgBG Background Remover",
    description: "See why thousands of professionals trust ImgBG for background removal.",
    url: "https://imgbg.com/reviews",
  },
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      company: "Creative Studio",
      content:
        "ImgBG has revolutionized my workflow. The accuracy is incredible and it saves me hours every week. I used to spend 10-15 minutes per image with Photoshop, now it takes seconds.",
      rating: 5,
      image: "/professional-woman-diverse.png",
    },
    {
      name: "Michael Chen",
      role: "E-commerce Manager",
      company: "Fashion Retail Co.",
      content:
        "Perfect for product photography. Clean backgrounds in seconds without any manual editing. We process hundreds of product images weekly and ImgBG has been a game-changer.",
      rating: 5,
      image: "/professional-man.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      company: "Social Media Agency",
      content:
        "The best background remover I've used. Fast, accurate, and the results are always professional. My clients are amazed at the quality and turnaround time.",
      rating: 5,
      image: "/content-creator-workspace.png",
    },
    {
      name: "David Kim",
      role: "Photographer",
      company: "Kim Photography",
      content:
        "As a professional photographer, I'm very particular about quality. ImgBG delivers consistently excellent results, even with challenging subjects like hair and transparent objects.",
      rating: 5,
      image: "/photographer.png",
    },
    {
      name: "Lisa Anderson",
      role: "Marketing Director",
      company: "Tech Startup",
      content:
        "We use ImgBG for all our marketing materials. The batch processing feature is incredible - we can process entire photoshoots in minutes instead of days.",
      rating: 5,
      image: "/marketing-professional.png",
    },
    {
      name: "James Wilson",
      role: "Freelance Designer",
      company: "Independent",
      content:
        "I've tried many background removal tools, but ImgBG is by far the best. The AI is incredibly smart and handles complex edges beautifully. Worth every penny.",
      rating: 5,
      image: "/diverse-designers-brainstorming.png",
    },
  ]

  const stats = [
    { value: "50K+", label: "Happy Users" },
    { value: "1M+", label: "Images Processed" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "99%", label: "Satisfaction Rate" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Loved by Professionals
                <br />
                <span className="text-primary">Worldwide</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Join thousands of satisfied customers who trust ImgBG for their background removal needs
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-card border border-border p-6 flex flex-col">
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
                  <p className="text-sm mb-6 text-muted-foreground leading-relaxed flex-1">"{review.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img src={review.image || "/placeholder.svg"} alt={review.name} className="w-12 h-12 bg-muted" />
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                      <p className="text-xs text-muted-foreground">{review.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Them?</h2>
              <p className="text-muted-foreground mb-8">Start removing backgrounds like a pro today</p>
              <a
                href="/"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-primary/90 transition-colors"
              >
                Try ImgBG Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
