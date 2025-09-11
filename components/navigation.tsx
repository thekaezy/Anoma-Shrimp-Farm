"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/", emoji: "🏠" },
    { name: "Meme Economy", path: "/meme-economy", emoji: "📈" },
    { name: "Marketplace", path: "/marketplace", emoji: "🛒" },
    { name: "Float Zone", path: "/float-zone", emoji: "🚀" },
    { name: "ASMR", path: "/asmr", emoji: "🎧" },
    { name: "Submit", path: "/submit", emoji: "➕" },
  ]

  return (
    <nav className="bg-white shadow-lg border-b-4 border-red-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Side: Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl">🦐</div>
            <div className="text-2xl font-black text-red-600">Shrimp Farm</div>
          </Link>

          {/* Right Side: Creator Info + Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Creator Info */}
            <a
              href="https://x.com/TheKaezy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-red-100/50 px-3 py-1.5 rounded-full border border-red-200 hover:bg-red-100 transition-all"
            >
              <span className="text-sm font-bold text-red-700">Created by @thekaezy</span>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/424a8840a_image.png"
                alt="@thekaezy"
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              />
            </a>

            {/* Navigation Links */}
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 text-sm font-bold ${
                    pathname === item.path
                      ? "bg-red-500 text-white shadow-lg transform scale-105"
                      : "text-red-600 hover:bg-red-100 hover:scale-105"
                  }`}
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-red-600 text-2xl">🍤</button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          {/* Creator Info for Mobile */}
          <a
            href="https://x.com/TheKaezy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 mb-4 bg-red-100/50 px-3 py-1.5 rounded-full border border-red-200 max-w-xs mx-auto"
          >
            <span className="text-sm font-bold text-red-700">Created by @thekaezy</span>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/424a8840a_image.png"
              alt="@thekaezy"
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            />
          </a>

          <div className="grid grid-cols-3 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`p-3 rounded-xl text-center transition-all duration-300 ${
                  pathname === item.path ? "bg-red-500 text-white shadow-lg" : "bg-red-50 text-red-600 hover:bg-red-100"
                }`}
              >
                <div className="text-xl">{item.emoji}</div>
                <div className="text-xs font-bold mt-1">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
