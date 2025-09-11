interface Meme {
  id?: string
  title: string
  description?: string
  file_url?: string
  market_value?: number
}

interface MemeCardProps {
  meme?: Meme
  isPlaceholder?: boolean
}

export default function MemeCard({ meme, isPlaceholder = false }: MemeCardProps) {
  const placeholderMemes = [
    { title: "Shrimp CEO Resignation", value: "+420", emoji: "👔🦐" },
    { title: "Dancing Shrimp Viral", value: "+690", emoji: "💃🦐" },
    { title: "Shrimp NFT Crash", value: "-200", emoji: "🖼️🦐" },
    { title: "Wholesome Shrimp", value: "+150", emoji: "😇🦐" },
    { title: "Angry Shrimp Rant", value: "+88", emoji: "😡🦐" },
    { title: "Shrimp Philosophy", value: "+42", emoji: "🧠🦐" },
  ]

  const displayMeme = isPlaceholder ? placeholderMemes[Math.floor(Math.random() * placeholderMemes.length)] : meme
  const marketValue =
    displayMeme?.market_value || Number.parseInt((displayMeme as any)?.value) || Math.floor(Math.random() * 1000) - 200
  const isPositive = marketValue >= 0

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-red-100 hover:border-red-300">
      {/* Image/Emoji Section */}
      <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center relative overflow-hidden">
        {displayMeme?.file_url ? (
          <img
            src={displayMeme.file_url || "/placeholder.svg"}
            alt={displayMeme.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="text-6xl animate-bounce">{(displayMeme as any)?.emoji || "🦐💫"}</div>
        )}

        {/* Market Indicator */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-black shadow-lg ${
            isPositive ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {isPositive ? "↗️" : "↘️"} {Math.abs(marketValue)}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-black text-gray-800 mb-3 line-clamp-2">
          {displayMeme?.title || (displayMeme as any)?.name}
        </h3>

        {displayMeme?.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{displayMeme.description}</p>
        )}

        {/* Market Value */}
        <div className="flex justify-between items-center pt-4 border-t border-red-100">
          <div className="text-sm text-gray-500 font-medium">Market Value</div>
          <div
            className={`text-lg font-black flex items-center space-x-1 ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            <span>
              {isPositive ? "+" : ""}
              {marketValue}
            </span>
            <span className="text-yellow-500">💰</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-4 bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Trade Now! 🚀
        </button>
      </div>
    </div>
  )
}
