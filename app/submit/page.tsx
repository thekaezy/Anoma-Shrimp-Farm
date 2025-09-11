"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, ImageIcon, User, Sparkles } from "lucide-react"
import MemeCard from "@/components/meme-card"
import PersonalityCard from "@/components/personality-card"

export default function Submit() {
  // Meme form state
  const [memeTitle, setMemeTitle] = useState("")
  const [memeDescription, setMemeDescription] = useState("")
  const [memeFile, setMemeFile] = useState<File | null>(null)
  const [memeUploading, setMemeUploading] = useState(false)

  // Personality form state
  const [personalityName, setPersonalityName] = useState("")
  const [personalityDescription, setPersonalityDescription] = useState("")
  const [personalityCursedPower, setPersonalityCursedPower] = useState(50)
  const [personalityFile, setPersonalityFile] = useState<File | null>(null)
  const [personalityUploading, setPersonalityUploading] = useState(false)

  // Submitted content
  const [submittedMemes, setSubmittedMemes] = useState([])
  const [submittedPersonalities, setSubmittedPersonalities] = useState([])

  useEffect(() => {
    // Simulate loading submissions
  }, [])

  const handleMemeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!memeTitle) return

    setMemeUploading(true)
    try {
      // Simulate upload
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form
      setMemeTitle("")
      setMemeDescription("")
      setMemeFile(null)
    } catch (error) {
      console.error("Error submitting meme:", error)
    } finally {
      setMemeUploading(false)
    }
  }

  const handlePersonalitySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!personalityName || !personalityDescription) return

    setPersonalityUploading(true)
    try {
      // Simulate upload
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form
      setPersonalityName("")
      setPersonalityDescription("")
      setPersonalityCursedPower(50)
      setPersonalityFile(null)
    } catch (error) {
      console.error("Error submitting personality:", error)
    } finally {
      setPersonalityUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4 animate-bounce">🎨🦐✨</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Submit Your Creations</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto font-bold">
            Share your cursed shrimp memes and personalities with our chaotic community! 🌪️🎭
          </p>
        </div>
      </div>

      {/* Submission Forms */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="meme" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 h-16 bg-white border-2 border-red-200 rounded-2xl">
            <TabsTrigger
              value="meme"
              className="text-lg font-bold data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-xl m-2"
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              Submit Meme 📈
            </TabsTrigger>
            <TabsTrigger
              value="personality"
              className="text-lg font-bold data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl m-2"
            >
              <User className="w-5 h-5 mr-2" />
              Create Personality 👤
            </TabsTrigger>
          </TabsList>

          {/* Meme Submission */}
          <TabsContent value="meme">
            <Card className="shadow-2xl border-2 border-red-200">
              <CardHeader className="bg-red-50 text-center py-8">
                <CardTitle className="text-3xl font-black text-red-800 flex items-center justify-center space-x-2">
                  <ImageIcon className="w-8 h-8" />
                  <span>Submit Your Meme</span>
                  <span className="text-4xl">📈</span>
                </CardTitle>
                <p className="text-red-600 text-lg mt-4">Create the next viral shrimp meme! 🔥</p>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleMemeSubmit} className="space-y-6">
                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-3">Meme Title 🏷️</label>
                    <Input
                      value={memeTitle}
                      onChange={(e) => setMemeTitle(e.target.value)}
                      placeholder="e.g., 'Shrimp CEO's Epic Fail'"
                      className="text-lg border-2 border-red-200 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-3">Description 📝</label>
                    <Textarea
                      value={memeDescription}
                      onChange={(e) => setMemeDescription(e.target.value)}
                      placeholder="What makes this meme cursed and amazing?"
                      className="border-2 border-red-200 rounded-xl min-h-24"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-3">Upload Image (Optional) 🖼️</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setMemeFile(e.target.files?.[0] || null)}
                      className="w-full p-4 border-2 border-red-200 rounded-xl bg-white"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Supported: JPG, PNG, GIF (or leave empty for emoji placeholder)
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={memeUploading || !memeTitle}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-lg font-black rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {memeUploading ? (
                      <>
                        <div className="animate-spin mr-2">🦐</div>
                        Creating Your Meme...
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5 mr-2" />
                        Submit to Meme Economy! 🚀
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Personality Submission */}
          <TabsContent value="personality">
            <Card className="shadow-2xl border-2 border-purple-200">
              <CardHeader className="bg-purple-50 text-center py-8">
                <CardTitle className="text-3xl font-black text-purple-800 flex items-center justify-center space-x-2">
                  <User className="w-8 h-8" />
                  <span>Create Personality</span>
                  <span className="text-4xl">👤</span>
                </CardTitle>
                <p className="text-purple-600 text-lg mt-4">Design the most cursed shrimp character! 🎭</p>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handlePersonalitySubmit} className="space-y-6">
                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-3">Personality Name 🏷️</label>
                    <Input
                      value={personalityName}
                      onChange={(e) => setPersonalityName(e.target.value)}
                      placeholder="e.g., 'Disco Shrimp Dancer'"
                      className="text-lg border-2 border-purple-200 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-3">Cursed Description 📖</label>
                    <Textarea
                      value={personalityDescription}
                      onChange={(e) => setPersonalityDescription(e.target.value)}
                      placeholder="What makes this personality absolutely chaotic? Be creative!"
                      className="border-2 border-purple-200 rounded-xl min-h-32"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-3">
                      Cursed Power Level ⚡ ({personalityCursedPower})
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={personalityCursedPower}
                      onChange={(e) => setPersonalityCursedPower(Number.parseInt(e.target.value))}
                      className="w-full h-3 bg-purple-200 rounded-lg appearance-none slider-thumb"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>Mild Chaos (1)</span>
                      <span>MAXIMUM CHAOS (500)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-3">Character Image (Optional) 🖼️</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setPersonalityFile(e.target.files?.[0] || null)}
                      className="w-full p-4 border-2 border-purple-200 rounded-xl bg-white"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Upload an image or leave empty for emoji representation
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={personalityUploading || !personalityName || !personalityDescription}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 text-lg font-black rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {personalityUploading ? (
                      <>
                        <div className="animate-spin mr-2">🦐</div>
                        Creating Personality...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Add to Marketplace! 🎪
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Submitted Content Preview */}
      {(submittedMemes.length > 0 || submittedPersonalities.length > 0) && (
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🎉🦐🎨</div>
            <h2 className="text-4xl font-black text-gray-800 mb-4">Your Awesome Submissions!</h2>
            <p className="text-xl text-gray-600">Look at what you've created! The community loves it! 💖</p>
          </div>

          {/* Submitted Memes */}
          {submittedMemes.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-black text-red-600 mb-8 text-center">Your Memes in the Economy 📈</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {submittedMemes.slice(0, 4).map((meme: any) => (
                  <MemeCard key={meme.id} meme={meme} />
                ))}
              </div>
            </div>
          )}

          {/* Submitted Personalities */}
          {submittedPersonalities.length > 0 && (
            <div>
              <h3 className="text-2xl font-black text-purple-600 mb-8 text-center">
                Your Characters in the Marketplace 🛒
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {submittedPersonalities.slice(0, 4).map((personality: any) => (
                  <PersonalityCard key={personality.id} personality={personality} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Submission Guidelines */}
      <div className="bg-gradient-to-r from-red-100 via-pink-100 to-purple-100 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📋🦐✅</div>
          <h3 className="text-3xl font-black text-gray-800 mb-8">Submission Guidelines</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🎭</div>
              <h4 className="text-lg font-bold mb-2">Be Creative</h4>
              <p className="text-gray-600 text-sm">The more cursed and chaotic, the better!</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🦐</div>
              <h4 className="text-lg font-bold mb-2">Keep it Shrimp-themed</h4>
              <p className="text-gray-600 text-sm">Everything should relate to our shrimp family</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">💝</div>
              <h4 className="text-lg font-bold mb-2">Have Fun!</h4>
              <p className="text-gray-600 text-sm">This is all about chaotic fun and creativity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
