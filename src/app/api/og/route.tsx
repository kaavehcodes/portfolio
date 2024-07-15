import { NextRequest } from "next/server";
import { ImageResponse } from "next/og"

export const runtime = "edge"

// const robotoLight = fetch(new URL("/fonts/Roboto/Roboto-Light.ttf", import.meta.url)).then((res) => res.arrayBuffer())

export async function GET(req: NextRequest) {
  try {
    // const fontLight = await robotoLight

    const { searchParams } = req.nextUrl
    const title = searchParams.get("title")

    if (!title) {
      return new Response("No title provided")
    }

    const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title

    return new ImageResponse(<div tw="flex items-center"><div>BLOG POST</div></div>, {
      width: 1200,
      height: 630,
      // fonts: [
      //   {
      //     name: "Roboto",
      //     data: fontLight,
      //     style: "normal",
      //     weight: 500,
      //   }
      // ]
    })

  } catch (error) {
    return new Response("Failed to generate image", { status: 500 })
  }
}