"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, Download, RotateCcw } from "lucide-react"
import { toast } from "sonner"

type ProcessingState = "idle" | "uploading" | "processing" | "success" | "error"

export function BackgroundRemoverTool() {
  const [state, setState] = useState<ProcessingState>("idle")
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file")
      setState("error")
      setErrorMessage("Please select a valid image file")
      return
    }

    // Show preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string)
    }
    reader.readAsDataURL(file)

    // Start processing
    setState("uploading")
    toast.info("Uploading your image...")

    // Simulate upload animation (2s)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setState("processing")

    try {
      // Create FormData
      const formData = new FormData()
      formData.append("image", file)

      // Call API
      const response = await fetch("/api/remove-background", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.error_code === 0 && data.data?.image_url) {
        setProcessedImage(data.data.image_url)
        setState("success")
        toast.success("Background removed successfully!")
      } else {
        throw new Error(data.error_detail?.message || "Failed to process image")
      }
    } catch (error) {
      console.error("Error processing image:", error)
      const message = error instanceof Error ? error.message : "Failed to remove background"
      setErrorMessage(message)
      setState("error")
      toast.error(message)
    }
  }

  const handleReset = () => {
    setState("idle")
    setOriginalImage(null)
    setProcessedImage(null)
    setErrorMessage("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    toast.info("Ready for a new image")
  }

  const handleDownload = async () => {
    if (!processedImage) return

    try {
      const response = await fetch(processedImage)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `imgbg-removed-${Date.now()}.png`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      toast.success("Image downloaded successfully!")
    } catch (error) {
      console.error("Error downloading image:", error)
      toast.error("Failed to download image")
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />

      {state === "idle" && (
        <div className="border-2 border-dashed border-border bg-muted/30 p-12 text-center">
          <div className="flex flex-col items-center space-y-4">
            <Upload className="w-16 h-16 text-muted-foreground" strokeWidth={1} />
            <div>
              <h3 className="text-xl font-bold mb-2">Upload Your Human Image</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Select a human portrait image to remove its background instantly
              </p>
              <p className="text-xs text-muted-foreground/70">This tool works best with human images</p>
            </div>
            <Button
              size="lg"
              onClick={() => fileInputRef.current?.click()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none"
            >
              <Upload className="mr-2 h-5 w-5" strokeWidth={1} />
              Choose Image
            </Button>
          </div>
        </div>
      )}

      {(state === "uploading" || state === "processing") && originalImage && (
        <div className="relative border border-border bg-card p-8">
          <div className="relative">
            <img
              src={originalImage || "/placeholder.svg"}
              alt="Processing"
              className={`w-full h-auto ${state === "processing" ? "blur-sm" : ""} transition-all duration-500`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <video autoPlay loop muted playsInline className="w-[220px] h-auto" style={{ width: "220px" }}>
                <source
                  src="https://trickbd.com/wp-content/uploads/2025/10/16/loading-animated-icon-gif-download-5715657.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      )}

      {state === "success" && processedImage && (
        <div className="space-y-6">
          <div className="border border-border bg-card p-4">
            <p className="text-sm font-medium mb-2 text-primary">Background Removed</p>
            <div
              className="relative"
              style={{
                backgroundImage: "repeating-conic-gradient(#e2e8f0 0% 25%, transparent 0% 50%) 50% / 20px 20px",
              }}
            >
              <img src={processedImage || "/placeholder.svg"} alt="Processed" className="w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleDownload}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none"
            >
              <Download className="mr-2 h-5 w-5" strokeWidth={1} />
              Download Image
            </Button>
            <Button size="lg" variant="outline" onClick={handleReset} className="rounded-none bg-transparent">
              <RotateCcw className="mr-2 h-5 w-5" strokeWidth={1} />
              Process Another
            </Button>
          </div>
        </div>
      )}

      {state === "error" && (
        <div className="border-2 border-red-500 bg-red-50 dark:bg-red-950/20 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 border-2 border-red-500 flex items-center justify-center">
              <span className="text-3xl text-red-500">✕</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-red-600 dark:text-red-400">Processing Failed</h3>
          <p className="text-sm text-red-600 dark:text-red-400 mb-4">{errorMessage}</p>
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 bg-transparent rounded-none"
          >
            Try Again
          </Button>
        </div>
      )}
    </div>
  )
}
