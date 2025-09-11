"use client"

import { useState, useEffect } from "react"
import MemeCard from "@/components/meme-card"

export default function MemeEconomy() {
  const [memes, setMemes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  // Generate placeholder memes if no real memes exist
  const placeholderCount = Math.max(0, 6 - memes.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4 animate-bounce">📈🦐💰</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Shrimp Meme Economy</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto font-bold">
            Trade in the hottest shrimp memes! Watch your MemeCoins soar (or crash spectacularly)! 🎢
          </p>

          {/* Market Summary */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-black">+420</div>
              <div className="text-red-100">Hot Memes</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-2">💎</div>
              <div className="text-2xl font-black">69,420</div>
              <div className="text-red-100">Total Value</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-2xl font-black">+88%</div>
              <div className="text-red-100">Market Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* Memes Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-black text-gray-800 mb-2">Current Memes Trading 🔥</h2>
            <p className="text-gray-600">
              {memes.length > 0 ? `${memes.length} active memes` : "Sample memes from our collection"}
            </p>
          </div>

          <div className="flex space-x-4">
            <select className="bg-white border-2 border-red-200 rounded-xl px-4 py-2 font-bold text-red-600">
              <option>All Memes</option>
              <option>Hot 🔥</option>
              <option>New ✨</option>
              <option>Trending 📈</option>
              <option>Cursed 👻</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 animate-spin">🦐</div>
            <p className="text-xl text-gray-600">Loading meme market data...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Real Memes */}
            {memes.map((meme: any) => (
              <MemeCard key={meme.id} meme={meme} />
            ))}

            {/* Placeholder Memes */}
            {Array(placeholderCount)
              .fill(0)
              .map((_, index) => (
                <MemeCard key={`placeholder-${index}`} isPlaceholder={true} />
              ))}
          </div>
        )}

        {memes.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🦐💭</div>
            <h3 className="text-2xl font-black text-gray-800 mb-4">No User Memes Yet!</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Be the first to submit your cursed shrimp memes and watch them trade on our market!
            </p>
            <button className="bg-red-500 text-white px-8 py-4 rounded-full font-black hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Submit Your Meme 🚀
            </button>
          </div>
        )}
      </div>

      {/* Market Alert */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 mx-4 p-6 rounded-r-2xl mb-8">
        <div className="flex items-center">
          <div className="text-2xl mr-4">⚠️</div>
          <div>
            <h4 className="font-black text-yellow-800">Market Alert!</h4>
            <p className="text-yellow-700">Shrimp futures are looking volatile! Trade at your own risk! 📊💥</p>
          </div>
        </div>
      </div>
    </div>
  )
}
