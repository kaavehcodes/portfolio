"use client"

import Link from "next/link"
import Image from "next/image"
import IconArrowRight from "./icons/IconArrowRight"

const NextItem = ({ title, description, image, slug }: { title: string; description?: string; image: string; slug: string }) => {
  return (
    <div className="w-full bg-white p-8 overflow-hidden">
      <div className="mb-8">
        <Link href={slug} className="flex flex-row text-2xl font-normal mb-16">
          <span className="mr-4">Next Project</span>
          <IconArrowRight width={32} height={32} />
        </Link>
        <h2 className="text-4xl font-medium mb-2">{title}</h2>
        <h4 className="text-xl font-light">{description}</h4>
      </div>
      <figure className="relative">
        <Image src={image} width={640} height={160} className="absolute bottom-0 left-1/2 translate-y-1/2" alt="" />
      </figure>
    </div>
  )
}

export default NextItem