interface Personality {
  id?: string
  name: string
  description: string
  cursed_power?: number
  file_url?: string
}

interface PersonalityCardProps {
  personality?: Personality
  isPlaceholder?: boolean
}

export default function PersonalityCard({ personality, isPlaceholder = false }: PersonalityCardProps) {
  const placeholderPersonalities = [
    {
      name: "Evil Shrimp CEO",
      description: "Runs a Fortune 500 kelp forest company. Exclusively wears tiny suits. 👔💼",
      cursed_power: 88,
      emoji: "👔🦐",
    },
    {
      name: "Shrimpy Wizard",
      description: "Casts spells that turn plankton into gold. Questionable beard hygiene. 🧙‍♂️✨",
      cursed_power: 420,
      emoji: "🧙‍♂️🦐",
    },
    {
      name: "Shrimp Influencer",
      description: "Has 2.3M followers on ShrimpTok. Sponsored by Big Kelp. Always posing. 📸💅",
      cursed_power: 200,
      emoji: "📸🦐",
    },
    {
      name: "Goth Shrimp",
      description: "Listens to My Crustacean Romance. Only eats black algae. Moody as heck. 🖤🎵",
      cursed_power: 66,
      emoji: "🖤🦐",
    },
    {
      name: "Chef Shrimp",
      description: "Ironically excellent at cooking... anything but shrimp. 5-star Michelin. 👨‍🍳🔥",
      cursed_power: 150,
      emoji: "👨‍🍳🦐",
    },
    {
      name: "Shrimp Philosopher",
      description: "Ponders the meaning of existence while floating upside down. Deep thoughts. 🤔💭",
      cursed_power: 42,
      emoji: "🧠🦐",
    },
  ]

  const displayPersonality = isPlaceholder
    ? placeholderPersonalities[Math.floor(Math.random() * placeholderPersonalities.length)]
    : personality

  const powerLevel = displayPersonality?.cursed_power || Math.floor(Math.random() * 500) + 10
  const powerColor = powerLevel >= 300 ? "text-red-600" : powerLevel >= 100 ? "text-orange-500" : "text-green-600"

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-red-100 hover:border-red-300 relative">
      {/* Power Badge */}
      <div
        className={`absolute top-4 right-4 ${powerColor} bg-white rounded-full px-3 py-1 text-sm font-black shadow-lg z-10 border-2 border-current`}
      >
        ⚡{powerLevel}
      </div>

      {/* Image/Emoji Section */}
      <div className="h-48 bg-gradient-to-br from-red-100 to-purple-200 flex items-center justify-center relative overflow-hidden">
        {displayPersonality?.file_url ? (
          <img
            src={displayPersonality.file_url || "/placeholder.svg"}
            alt={displayPersonality.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="text-7xl animate-pulse">{(displayPersonality as any)?.emoji || "🦐👤"}</div>
        )}

        {/* Cursed Overlay */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-black text-gray-800 mb-3 line-clamp-1">{displayPersonality?.name}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{displayPersonality?.description}</p>

        {/* Stats */}
        <div className="flex justify-between items-center py-4 border-t border-red-100">
          <div className="text-sm text-gray-500 font-medium">Cursed Power</div>
          <div className={`text-lg font-black flex items-center space-x-1 ${powerColor}`}>
            <span>+{powerLevel}</span>
            <span>chaos</span>
            <span className="text-purple-500">🔮</span>
          </div>
        </div>

        {/* Rarity Indicator */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs text-gray-500">Rarity</span>
          <div className="flex space-x-1">
            {Array(Math.min(5, Math.ceil(powerLevel / 100)))
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ⭐
                </span>
              ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Adopt 🏠
          </button>
          <button className="px-4 py-3 border-2 border-red-500 text-red-500 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all duration-300">
            👀
          </button>
        </div>
      </div>
    </div>
  )
}
