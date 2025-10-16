import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - ImgBG",
  description: "Read the terms of service for using ImgBG background remover tool.",
  openGraph: {
    title: "Terms of Service - ImgBG",
    url: "https://imgbg.com/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Terms of Service</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using ImgBG ("the Service"), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to these terms, please do not use the Service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use License</h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily use the Service for personal or commercial purposes. This is the
                grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Modify or copy the Service materials</li>
                <li>Use the materials for any commercial purpose without proper licensing</li>
                <li>Attempt to decompile or reverse engineer any software contained in the Service</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. User Content</h2>
              <p className="leading-relaxed">
                You retain all rights to the images you upload to ImgBG. We do not claim ownership of your content.
                However, by uploading images, you grant us permission to process them for the purpose of providing the
                background removal service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Privacy and Data</h2>
              <p className="leading-relaxed">
                We take your privacy seriously. Uploaded images are processed and then automatically deleted from our
                servers within 24 hours. We do not store, share, or use your images for any purpose other than providing
                the service. For more details, please see our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Service Availability</h2>
              <p className="leading-relaxed">
                We strive to provide uninterrupted service, but we do not guarantee that the Service will be available
                at all times. We may experience hardware, software, or other problems that could lead to interruptions,
                delays, or errors.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Limitations</h2>
              <p className="leading-relaxed">
                In no event shall ImgBG or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the Service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Prohibited Uses</h2>
              <p className="leading-relaxed">You may not use the Service:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Modifications</h2>
              <p className="leading-relaxed">
                ImgBG reserves the right to revise these terms of service at any time without notice. By using this
                Service you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at support@imgbg.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
