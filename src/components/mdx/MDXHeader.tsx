"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface MDXHeader {
  title: string;
  imgSrc: string;
}

const MDXHeader = ({ title, imgSrc }: MDXHeader) => {
  return (
    <section>
      <figure>
        <Image src={imgSrc} width={1920} height={1080} alt="" />
      </figure>
    </section>
  )
}

export default MDXHeader