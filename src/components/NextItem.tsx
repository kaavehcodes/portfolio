"use client"

import Image from "next/image"
import IconArrowRight from "./icons/IconArrowRight"

const NextItem = ({ title, description, image }: { title: string; description?: string; image: string }) => {
  return (
    <div className="w-full bg-red-500 p-8">
      <div className="mb-8">
        <button className="flex flex-row text-2xl font-normal mb-16">
          <span className="mr-4">Next Project</span>
          <IconArrowRight width={32} height={32} />
        </button>
        <h2 className="text-4xl font-medium mb-2">{title}</h2>
        <h4 className="text-xl font-light">{description}</h4>
      </div>
      <figure className="flex flex-col items-center bg-yellow-300">
        <Image src={image} width={640} height={160} alt="" />
      </figure>
    </div>
  )
}

export default NextItem