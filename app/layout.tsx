import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shrimp Farm - Where Chaos Meets Crustaceans",
  description: "The most cursed shrimp ecosystem on the internet",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
          <Navigation />
          <main className="relative">{children}</main>

          {/* Footer */}
          <footer className="bg-red-600 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
              <div className="text-4xl mb-4">🦐💸🎭</div>
              <p className="text-xl font-bold mb-2">Welcome to the Chaos!</p>
              <p className="text-red-200 mb-8">Where shrimp dreams come true... or become nightmares 🌟</p>

              <div className="flex flex-col items-center space-y-3">
                <div className="text-sm text-red-200 font-medium">Cohort team: Anoma Dinos</div>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2f9c83a73_image.png"
                  alt="Anoma Dinos"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
