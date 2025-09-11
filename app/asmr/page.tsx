"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Pause, Upload, Volume2, VolumeX } from "lucide-react"

export default function ASMR() {
  const [asmrContent, setAsmrContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [uploadTitle, setUploadTitle] = useState("")
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!uploadFile || !uploadTitle) return

    setUploading(true)
    try {
      // Simulate upload
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setUploadFile(null)
      setUploadTitle("")
    } catch (error) {
      console.error("Error uploading ASMR content:", error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-red-500 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4 animate-pulse">🎧🦐💤</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Shrimp ASMR Zone</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto font-bold mb-8">
            Relax... the shrimp are whispering to you... 🌊✨
          </p>

          <div className="text-lg text-pink-200 max-w-2xl mx-auto">
            Close your eyes and let the gentle sounds of our cursed shrimp family soothe your soul 👻💆‍♀️
          </div>
        </div>
      </div>

      {/* Main ASMR Player */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Card className="shadow-2xl border-2 border-purple-200 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 text-center py-12">
            <div className="text-8xl mb-4 animate-bounce">🦐💤</div>
            <CardTitle className="text-3xl font-black text-purple-800 mb-4">Featured ASMR Experience</CardTitle>
            <p className="text-purple-600 text-lg">"Shrimp Dreams: A Journey Through Kelp Forests" 🌿</p>
          </CardHeader>

          <CardContent className="p-8">
            {/* Placeholder Audio Player */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
              <div className="text-4xl mb-4">🎵</div>
              <p className="text-gray-300 mb-6">Ambient shrimp sounds • 42:00 minutes • Ultra HD Quality</p>

              <div className="flex justify-center items-center space-x-6 mb-6">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-purple-500 h-2 rounded-full w-1/3 transition-all duration-1000"></div>
              </div>

              <div className="flex justify-between text-sm text-gray-400">
                <span>14:20</span>
                <span>42:00</span>
              </div>
            </div>

            {/* ASMR Description */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-black text-gray-800 mb-4">What You'll Experience 🌊</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl mb-2">🌊</div>
                  <h4 className="font-bold text-purple-800">Ocean Waves</h4>
                  <p className="text-sm text-purple-600">Gentle currents</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-xl">
                  <div className="text-3xl mb-2">🦐</div>
                  <h4 className="font-bold text-pink-800">Shrimp Whispers</h4>
                  <p className="text-sm text-pink-600">Soft conversations</p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl">
                  <div className="text-3xl mb-2">🌿</div>
                  <h4 className="font-bold text-red-800">Kelp Forest</h4>
                  <p className="text-sm text-red-600">Nature sounds</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Section */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Card className="shadow-xl border-2 border-red-200">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-2xl font-black text-red-800 text-center flex items-center justify-center space-x-2">
              <Upload className="w-6 h-6" />
              <span>Share Your ASMR Creation</span>
              <span className="text-3xl">🎤</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleFileUpload} className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-gray-800 mb-3">Title of Your ASMR Experience 🏷️</label>
                <Input
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="e.g., 'Whispering Shrimp Lullaby'"
                  className="text-lg border-2 border-red-200 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-800 mb-3">Upload Audio or Video File 📁</label>
                <input
                  type="file"
                  accept="audio/*,video/*"
                  onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                  className="w-full p-4 border-2 border-red-200 rounded-xl bg-white"
                  required
                />
                <p className="text-sm text-gray-600 mt-2">Supported formats: MP3, WAV, MP4, MOV, AVI</p>
              </div>

              <Button
                type="submit"
                disabled={uploading || !uploadFile || !uploadTitle}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-lg font-black rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {uploading ? (
                  <>
                    <div className="animate-spin mr-2">🦐</div>
                    Uploading Your Masterpiece...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 mr-2" />
                    Share with the World! 🌍
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* User Submissions */}
      {asmrContent.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <h2 className="text-3xl font-black text-gray-800 text-center mb-12">Community ASMR Creations 🎨</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {asmrContent.map((content: any) => (
              <Card
                key={content.id}
                className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-purple-200"
              >
                <CardContent className="p-6">
                  <div className="text-4xl text-center mb-4">{content.file_type === "audio" ? "🎵" : "🎬"}</div>
                  <h3 className="text-xl font-black text-gray-800 mb-4 text-center">{content.title}</h3>

                  {content.file_type === "audio" ? (
                    <audio controls className="w-full mb-4">
                      <source src={content.file_url} />
                    </audio>
                  ) : (
                    <video controls className="w-full rounded-lg mb-4">
                      <source src={content.file_url} />
                    </video>
                  )}

                  <div className="text-center">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                      User Creation 👤
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Relaxation Tips */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🧘‍♀️🦐💆‍♂️</div>
          <h3 className="text-3xl font-black text-gray-800 mb-8">Tips for Maximum Relaxation</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🎧</div>
              <h4 className="text-lg font-bold mb-2">Use Headphones</h4>
              <p className="text-gray-600 text-sm">For the full 3D shrimp experience</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🕯️</div>
              <h4 className="text-lg font-bold mb-2">Dim the Lights</h4>
              <p className="text-gray-600 text-sm">Create the perfect ambiance</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">😴</div>
              <h4 className="text-lg font-bold mb-2">Get Comfortable</h4>
              <p className="text-gray-600 text-sm">Let the shrimp take you away</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
