import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get("image") as File

    if (!image) {
      return NextResponse.json({ error_code: 1, error_detail: { message: "No image provided" } }, { status: 400 })
    }

    // Create FormData for external API
    const apiFormData = new FormData()
    apiFormData.append("image", image)

    // Call the background removal API
    const response = await fetch(
      "https://zylalabs.com/api/4405/human+background+removal+api/5414/human+background+removal",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BACKGROUND_REMOVAL_API_KEY}`,
        },
        body: apiFormData,
      },
    )

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in background removal API:", error)
    return NextResponse.json(
      {
        error_code: 1,
        error_detail: {
          message: error instanceof Error ? error.message : "Internal server error",
        },
      },
      { status: 500 },
    )
  }
}
