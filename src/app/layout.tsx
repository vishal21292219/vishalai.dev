import "@/styles/globals.css"
import { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Vishal Kumar — Systems Engineer",
  description: "Personal tech profile of Vishal Kumar.",
  metadataBase: new URL("https://vishalai.dev"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
