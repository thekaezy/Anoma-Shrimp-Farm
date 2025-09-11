"use client"

import { useState, useEffect } from "react"
import PersonalityCard from "@/components/personality-card"

export default function Marketplace() {
  const [personalities, setPersonalities] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("power")

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  // Generate placeholder personalities if no real ones exist
  const placeholderCount = Math.max(0, 8 - personalities.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 via-purple-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4 animate-pulse">🛒🦐👑</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Cursed Marketplace</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto font-bold mb-8">
            Adopt the most chaotic shrimp personalities! Each one comes with their own cursed backstory! 🎭✨
          </p>

          {/* Marketplace Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-2">👤</div>
              <div className="text-2xl font-black">{personalities.length + 6}</div>
              <div className="text-red-100">Personalities</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-black">9000+</div>
              <div className="text-red-100">Chaos Points</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-black">24</div>
              <div className="text-red-100">Adoptions Today</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-black">5⭐</div>
              <div className="text-red-100">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-800 mb-2">Available Personalities 👻</h2>
            <p className="text-gray-600">
              {personalities.length > 0
                ? `${personalities.length} custom personalities`
                : "Sample personalities from our collection"}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border-2 border-red-200 rounded-xl px-4 py-2 font-bold text-red-600"
            >
              <option value="power">Sort by Power ⚡</option>
              <option value="name">Sort by Name 📝</option>
              <option value="recent">Recently Added ⏰</option>
              <option value="chaos">Most Chaotic 🌪️</option>
            </select>

            <div className="flex bg-white border-2 border-red-200 rounded-xl overflow-hidden">
              <button className="px-4 py-2 bg-red-500 text-white font-bold">All</button>
              <button className="px-4 py-2 text-red-600 font-bold hover:bg-red-50">CEO 👔</button>
              <button className="px-4 py-2 text-red-600 font-bold hover:bg-red-50">Wizard 🧙‍♂️</button>
              <button className="px-4 py-2 text-red-600 font-bold hover:bg-red-50">Goth 🖤</button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 animate-spin">🦐</div>
            <p className="text-xl text-gray-600">Loading cursed personalities...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Real Personalities */}
            {personalities.map((personality: any) => (
              <PersonalityCard key={personality.id} personality={personality} />
            ))}

            {/* Placeholder Personalities */}
            {Array(placeholderCount)
              .fill(0)
              .map((_, index) => (
                <PersonalityCard key={`placeholder-${index}`} isPlaceholder={true} />
              ))}
          </div>
        )}

        {personalities.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🦐👻</div>
            <h3 className="text-2xl font-black text-gray-800 mb-4">No Custom Personalities Yet!</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Create your own cursed shrimp personality and add them to our marketplace!
            </p>
            <button className="bg-red-500 text-white px-8 py-4 rounded-full font-black hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Create Personality 🎨
            </button>
          </div>
        )}
      </div>

      {/* Featured Section */}
      <div className="bg-gradient-to-r from-purple-100 to-red-100 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">👑🦐✨</div>
          <h3 className="text-3xl font-black text-gray-800 mb-4">Personality of the Day!</h3>
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
            <div className="text-6xl mb-4">🧙‍♂️🦐</div>
            <h4 className="text-xl font-black mb-2">Shrimpy Wizard</h4>
            <p className="text-gray-600 mb-4">Currently trending with +420 chaos power!</p>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-black hover:bg-purple-600 transition-all duration-300">
              Adopt Now! 🏠
            </button>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-red-100 border-l-4 border-red-500 mx-4 p-6 rounded-r-2xl mb-8">
        <div className="flex items-center">
          <div className="text-2xl mr-4">⚠️</div>
          <div>
            <h4 className="font-black text-red-800">Disclaimer!</h4>
            <p className="text-red-700">
              All personalities come with unpredictable chaos levels. Adopt responsibly! 🎪💀
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
