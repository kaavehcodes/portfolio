"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const HorizontalScroll = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const targetRef = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: targetRef
    })

    const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"])


    return (
        <section ref={targetRef} className="relative h-[800vh]">
            <motion.div style={{ x: scrollX }} className="sticky top-0 flex flex-row items-center">
                {children}
            </motion.div>
        </section>
    )
}

export default HorizontalScroll
