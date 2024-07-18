"use client"

import Image from "next/image";
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FigureProps {
  children?: ReactNode;
  variant: "full" | "square";
  imgFull: string;
  imgLeft: string;
  imgRight: string;
}

const Figure = ({ children, variant, imgFull, imgLeft, imgRight }: FigureProps) => {
  return (
    <div className={cn("grid grid-cols-1", {
      "grid-cols-2 gap-8": variant === "square"
    })}>
      <figure className={cn("hidden w-max", {
        "block": variant === "full"
      })}>
        <Image src={imgFull} width={1080} height={1080} className="w-full" alt="" />
      </figure>
      <figure className={cn("hidden", {
        "block": variant === "square"
      })}>
        <Image src={imgLeft} width={1080} height={1080} className="w-full" alt="" />
      </figure>
      <figure className={cn("hidden", {
        "block": variant === "square"
      })}>
        <Image src={imgRight} width={1920} height={1080} className="w-full" alt="" />
      </figure>
    </div>
  )
}

export default Figure