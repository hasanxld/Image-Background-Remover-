import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - ImgBG",
  description: "Learn how ImgBG protects your privacy and handles your data.",
  openGraph: {
    title: "Privacy Policy - ImgBG",
    url: "https://imgbg.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">When you use ImgBG, we collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>
                  <strong className="text-foreground">Images:</strong> The images you upload for background removal
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong> Information about how you use our service,
                  including IP address, browser type, and access times
                </li>
                <li>
                  <strong className="text-foreground">Cookies:</strong> We use cookies to improve your experience and
                  analyze service usage
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>To provide and maintain our background removal service</li>
                <li>To process your images and deliver results</li>
                <li>To improve and optimize our service</li>
                <li>To monitor usage and detect technical issues</li>
                <li>To communicate with you about service updates</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Data Storage and Security</h2>
              <p className="leading-relaxed">Your privacy and security are our top priorities:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>
                  <strong className="text-foreground">Temporary Storage:</strong> Uploaded images are stored temporarily
                  only for processing
                </li>
                <li>
                  <strong className="text-foreground">Automatic Deletion:</strong> All images are automatically deleted
                  from our servers within 24 hours
                </li>
                <li>
                  <strong className="text-foreground">Encryption:</strong> All data transmission is encrypted using
                  SSL/TLS
                </li>
                <li>
                  <strong className="text-foreground">No Sharing:</strong> We never share, sell, or use your images for
                  any purpose other than providing the service
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Third-Party Services</h2>
              <p className="leading-relaxed">We may use third-party services to help us operate our service:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Cloud hosting providers for infrastructure</li>
                <li>Analytics services to understand usage patterns</li>
                <li>Payment processors for subscription services</li>
              </ul>
              <p className="leading-relaxed">
                These third parties have access to your information only to perform specific tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Your Rights</h2>
              <p className="leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request transfer of your information</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Cookies</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our service and hold certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@imgbg.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
