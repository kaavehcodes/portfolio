"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

const HorizontalScroll = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const targetRef = useRef<HTMLDivElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: targetRef
	})

	const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-510%"])

	return (
		<>
			<section ref={targetRef} className="relative h-[800vh] hidden lg:block">
				<motion.div style={{ x: scrollX }} className="sticky top-0 min-h-screen flex flex-row items-center">
					{children}
				</motion.div>
			</section>
			<section className="relative block lg:hidden">
				<div>
					{children}
				</div>
			</section>
		</>
	)
}

export default HorizontalScroll
