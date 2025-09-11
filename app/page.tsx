import TickerBar from "@/components/ticker-bar"

export default function Home() {
  return (
    <div>
      {/* Ticker Bar */}
      <TickerBar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="mb-8 animate-bounce">
            <div className="text-8xl mb-4">🦐💸</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Welcome to the
            <br />
            <span className="text-yellow-300">Shrimp Farm</span> 🦐💸
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto font-bold">
            Where memes, cursed shrimp personalities, and ASMR markets collide! 🎭🔥
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-black text-lg hover:bg-red-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Enter the Chaos 🌪️
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-black text-lg hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300">
              Browse Memes 👀
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-6xl animate-pulse opacity-30">🦐</div>
        <div className="absolute top-20 right-20 text-4xl animate-bounce opacity-40 delay-500">💸</div>
        <div className="absolute bottom-10 left-20 text-5xl animate-ping opacity-20 delay-1000">🎭</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-pulse opacity-30 delay-700">🔥</div>
      </div>

      {/* Features Preview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-red-600 mb-4">What Awaits You? 🎪</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into our cursed ecosystem of shrimp-based entertainment!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              emoji: "📈",
              title: "Meme Economy",
              description: "Trade in the hottest shrimp memes with fake internet money! 💰",
              color: "from-red-400 to-pink-500",
            },
            {
              emoji: "🛒",
              title: "Cursed Marketplace",
              description: "Buy personalities with chaos ratings that make no sense! 🎭",
              color: "from-red-500 to-red-600",
            },
            {
              emoji: "🎧",
              title: "ASMR Section",
              description: "Let the shrimp whisper sweet nothings into your soul... 👻",
              color: "from-pink-500 to-red-500",
            },
            {
              emoji: "➕",
              title: "Submit Content",
              description: "Add your own cursed creations to our collection! 🎨",
              color: "from-red-600 to-red-700",
            },
          ].map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-white relative overflow-hidden`}
              >
                <div className="absolute -top-4 -right-4 text-6xl opacity-20">{feature.emoji}</div>
                <div className="relative">
                  <div className="text-4xl mb-4">{feature.emoji}</div>
                  <h3 className="text-xl font-black mb-3">{feature.title}</h3>
                  <p className="text-sm text-red-100 font-medium leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-6xl mb-6">🦐🎪🦐</div>
          <h2 className="text-4xl font-black text-red-600 mb-4">Ready to Join the Madness?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your journey into the most chaotic shrimp ecosystem on the internet starts now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Start Exploring 🚀
            </button>
            <button className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-full font-black text-lg hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all duration-300">
              Learn More 🤔
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
