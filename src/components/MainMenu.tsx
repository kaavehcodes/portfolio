"use client";

import styles from "./animation.module.css"

import Link from "next/link"
import IconDribbble from "./icons/IconDribbble"
import IconGithub from "./icons/IconGithub"
import IconLinkedin from "./icons/IconLinkedin"
import IconTwitter from "./icons/IconTwitter"

const MainMenu = () => {
	return (
		<div className="lg:w-full px-0 py-4">
			<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
				<ul className="flex flex-col lg:flex-row lg:items-center mb-8 lg:mb-0">
					<li className="lg:relative lg:w-36">
						<Link href="/works" className="lg:absolute top-0 left-0 -translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold transition-all duration-75 cursor-pointer">
							WORKS
						</Link>
					</li>
					<li className="lg:relative lg:w-36">
						<a href="#about_section" rel="noopener" className="lg:absolute top-0 left-0 -translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold transition-all duration-75 cursor-pointer">
							ABOUT
						</a>
					</li>
					<li className="lg:relative lg:w-48">
						<a href="#contact_section" rel="noopener" className="lg:absolute top-0 left-0 -translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold transition-all duration-75 cursor-pointer">
							CONTACT
						</a>
					</li>
					<li className="lg:relative lg:w-28">
						<Link href="/blog" className="lg:absolute top-0 left-0 -translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold transition-all duration-75 cursor-pointer">
							BLOG
						</Link>
					</li>
				</ul>
				<ul className="flex flex-row items-center">
					<li className="mr-4 lg:mr-2">
						<a href="https://x.com/KaavehTweets" className="cursor-pointer" target="_blank" no-referrer="true">
							<IconTwitter width={32} height={32} />
						</a>
					</li>
					<li className="mr-4 lg:mr-2">
						<a href="https://dribbble.com/kaavehdesigns" className="cursor-pointer" target="_blank" no-referrer="true">
							<IconDribbble width={32} height={32} />
						</a>
					</li>
					<li className="mr-4 lg:mr-2">
						<a href="https://github.com/kaavehcodes" className="cursor-pointer" target="_blank" no-referrer="true">
							<IconGithub width={32} height={32} />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/kaavehrostami/" className="cursor-pointer" target="_blank" no-referrer="true">
							<IconLinkedin width={32} height={32} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MainMenu