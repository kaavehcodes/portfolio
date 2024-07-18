"use client"

import Image from "next/image"

const NextItem = () => {
  return (
    <footer>
      <div>
        <p>Next Project</p>
        <h2>Project title</h2>
        <h4>Category</h4>
      </div>
      <figure>
        <Image src="" width={640} height={480} alt="" />
      </figure>
    </footer>
  )
}

export default NextItem