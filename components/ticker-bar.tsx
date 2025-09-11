"use client"

import { useEffect, useState } from "react"

const tickerItems = [
  { name: "ShrimpMeme #23", value: "+200", trend: "up" },
  { name: "ShrimpCoin", value: "-50", trend: "down" },
  { name: "ASMR Shrimp", value: "+100", trend: "up" },
  { name: "Shrimpy Wizard", value: "+420", trend: "up" },
  { name: "Evil CEO Shrimp", value: "-69", trend: "down" },
  { name: "Shrimp Influencer", value: "+88", trend: "up" },
  { name: "Cursed Shrimp", value: "+666", trend: "up" },
  { name: "Baby Shrimp", value: "-12", trend: "down" },
]

export default function TickerBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerItems.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-red-600 text-white py-3 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
      <div className="relative flex animate-pulse">
        <div className="flex space-x-8 animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
              <span className="font-bold">{item.name}</span>
              <span className={`font-black ${item.trend === "up" ? "text-green-300" : "text-red-300"}`}>
                {item.trend === "up" ? "↑" : "↓"} {item.value}
              </span>
              <span className="text-yellow-300">💰</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
