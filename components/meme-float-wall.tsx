"use client"

import type React from "react"
import { useMemo, useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Upload, Rocket, User, ImagePlus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function useContainerSize() {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new ResizeObserver((entries) => {
      const r = entries[0].contentRect
      setSize({ width: r.width, height: r.height })
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, ...size }
}

const rand = (min: number, max: number) => Math.random() * (max - min) + min

interface Meme {
  id: string
  url: string
  name: string
  speed: number
  size: number
  startY: number
  delay: number
  direction: number
}

function FloatingMeme({ meme, boundsWidth }: { meme: Meme; boundsWidth: number }) {
  const duration = useMemo(() => meme.speed, [meme.speed])
  const startX = meme.direction === 1 ? -meme.size - 60 : boundsWidth + meme.size + 60
  const endX = meme.direction === 1 ? boundsWidth + meme.size + 60 : -meme.size - 60

  const bobKeyframes = useMemo(() => {
    const amp = rand(12, 32)
    return [0, amp, 0, -amp, 0]
  }, [])

  return (
    <motion.div
      initial={{ x: startX, y: meme.startY, rotate: 0, opacity: 0 }}
      animate={{
        x: endX,
        opacity: 1,
        transition: { duration, ease: "linear", delay: meme.delay, repeat: Number.POSITIVE_INFINITY },
      }}
      style={{ position: "absolute", top: 0, left: 0, width: meme.size, height: meme.size }}
    >
      <motion.div
        animate={{ y: bobKeyframes, rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: Math.max(6, duration / 3), repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative"
      >
        <Card className="overflow-hidden border-2 border-red-200 shadow-xl">
          <img
            src={meme.url || "/placeholder.svg"}
            alt={meme.name || "meme"}
            className="w-full h-full object-cover pointer-events-none select-none"
            draggable={false}
            style={{ width: meme.size, height: meme.size }}
          />
        </Card>
        {meme.name ? (
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-red-500 text-white shadow-lg border-2 border-white">{meme.name} 🦐</Badge>
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  )
}

export default function MemeFloatWall() {
  const [memes, setMemes] = useState<Meme[]>([])
  const [name, setName] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [speedScale, setSpeedScale] = useState(1)

  const { ref, width, height } = useContainerSize()

  const addMemes = async (fs: FileList | File[]) => {
    if (!fs || fs.length === 0) return
    const urls = await Promise.all(
      Array.from(fs).map(
        (f) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result as string)
            reader.readAsDataURL(f)
          }),
      ),
    )

    const newMemes: Meme[] = urls.map((url) => ({
      id: Math.random().toString(36).slice(2),
      url: String(url),
      name: name.trim(),
      speed: rand(14, 30) / speedScale,
      size: rand(110, 220),
      startY: rand(40, Math.max(80, Math.max(height - 240, 120))),
      delay: rand(0, 6),
      direction: Math.random() > 0.5 ? 1 : -1,
    }))

    setMemes((m) => [...m, ...newMemes])
    setFiles([])
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const fs = e.dataTransfer.files
    addMemes(fs)
  }

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fs = e.target.files
    if (fs) setFiles(Array.from(fs))
  }

  const removeAll = () => setMemes([])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-50 via-pink-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-8">
          <div className="flex items-center gap-2 text-red-100 mb-4">
            <Rocket className="w-5 h-5" />
            <span className="text-sm tracking-widest uppercase font-bold">Shrimp Meme Launcher</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            <span className="block">FLOAT YOUR</span>
            <span className="block text-yellow-300">SHRIMP MEMES! 🦐🚀</span>
          </h1>

          <p className="text-red-100 text-lg max-w-2xl mb-8">
            Upload your cursed shrimp memes and watch them float across the screen with your name! Perfect for streams,
            events, or just pure chaotic fun! 🎪
          </p>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <label className="relative">
              <input type="file" accept="image/*" multiple onChange={onPick} className="hidden" id="meme-input" />
              <Button
                className="bg-white text-red-600 hover:bg-red-50 font-bold border-2 border-white shadow-xl"
                asChild
              >
                <label htmlFor="meme-input" className="cursor-pointer">
                  <ImagePlus className="w-4 h-4" />
                  Choose Memes 📸
                </label>
              </Button>
            </label>

            <Button
              onClick={() => addMemes(files)}
              disabled={files.length === 0}
              className="bg-yellow-400 text-red-800 hover:bg-yellow-300 font-black shadow-xl"
            >
              <Upload className="w-4 h-4" />
              Launch {files.length > 0 ? `(${files.length})` : "Memes"} 🚀
            </Button>

            <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-2xl px-4 py-2 border-2 border-white/30">
              <User className="w-4 h-4 text-white" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your shrimp name..."
                className="bg-transparent outline-none placeholder-white/70 text-white font-medium"
              />
            </div>

            <div className="flex items-center gap-3 bg-white/20 backdrop-blur rounded-2xl px-4 py-2 border-2 border-white/30">
              <span className="text-sm font-bold text-white">Speed 🏃‍♂️</span>
              <input
                type="range"
                min={0.4}
                max={2}
                step={0.1}
                value={speedScale}
                onChange={(e) => setSpeedScale(Number.parseFloat(e.target.value))}
                className="w-20"
              />
            </div>

            {memes.length > 0 && (
              <Button className="bg-red-700 text-white hover:bg-red-800 font-bold shadow-xl" onClick={removeAll}>
                <Trash2 className="w-4 h-4" />
                Clear All 🗑️
              </Button>
            )}
          </div>

          <div className="text-sm text-red-200 font-medium">
            💡 Tip: You can also drag & drop images directly onto the float zone below!
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 text-6xl opacity-30 animate-bounce">🦐</div>
        <div className="absolute bottom-10 left-10 text-4xl opacity-20 animate-pulse">💫</div>
      </header>

      {/* Floating Stage */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div
          ref={ref}
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="relative h-[60vh] md:h-[70vh] rounded-3xl border-4 border-red-200 bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, #ef4444 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Decorative Shrimp */}
          <div className="absolute top-4 left-4 text-4xl opacity-20 animate-pulse">🦐</div>
          <div className="absolute top-4 right-4 text-3xl opacity-15 animate-bounce delay-300">💸</div>
          <div className="absolute bottom-4 left-4 text-5xl opacity-10 animate-pulse delay-700">🎪</div>
          <div className="absolute bottom-4 right-4 text-3xl opacity-20 animate-bounce delay-500">✨</div>

          {/* Floating Memes */}
          {memes.map((m) => (
            <FloatingMeme key={m.id} meme={m} boundsWidth={width || 1200} />
          ))}

          {memes.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-8xl mb-6 animate-bounce">🦐💭</div>
                <h3 className="text-2xl font-black text-red-600 mb-4">No Floating Memes Yet!</h3>
                <p className="text-lg text-gray-600 mb-2">
                  Be the first shrimp to launch a meme into the float zone! 🚀
                </p>
                <p className="text-sm text-gray-500">Upload images above or drag & drop them right here!</p>
              </div>
            </div>
          )}

          {/* Drag Drop Overlay */}
          <div
            className="absolute inset-4 border-4 border-dashed border-red-300 rounded-2xl opacity-30"
            style={{ pointerEvents: "none" }}
          ></div>
        </div>
      </main>

      {/* Stats Section */}
      {memes.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 pb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-red-50 border-2 border-red-200">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-2xl font-black text-red-600">{memes.length}</div>
              <div className="text-gray-600 font-medium">Memes Launched</div>
            </Card>
            <Card className="p-6 text-center bg-pink-50 border-2 border-pink-200">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-black text-pink-600">{speedScale}x</div>
              <div className="text-gray-600 font-medium">Current Speed</div>
            </Card>
            <Card className="p-6 text-center bg-yellow-50 border-2 border-yellow-200">
              <div className="text-3xl mb-2">🎪</div>
              <div className="text-2xl font-black text-yellow-600">∞</div>
              <div className="text-gray-600 font-medium">Chaos Level</div>
            </Card>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🦐🚀💫</div>
          <p className="text-xl font-bold mb-2">Powered by Shrimp Energy!</p>
          <p className="text-red-200">Float your memes to infinity and beyond! 🌟</p>
        </div>
      </footer>
    </div>
  )
}
