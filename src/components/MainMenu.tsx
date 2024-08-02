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
					<li className="lg:relative lg:w-36 mb-2 lg:mb-0">
						<Link href="/works" className="lg:absolute lg:top-0 lg:left-0 lg:-translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold transition-all duration-75 cursor-pointer">
							WORKS
						</Link>
					</li>
					<li className="lg:relative lg:w-36 mb-2 lg:mb-0">
						<a href="#about_section" rel="noopener" className="lg:absolute lg:top-0 lg:left-0 lg:-translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold transition-all duration-75 cursor-pointer">
							ABOUT
						</a>
					</li>
					<li className="lg:relative lg:w-48 mb-2 lg:mb-0">
						<a href="#contact_section" rel="noopener" className="lg:absolute lg:top-0 lg:left-0 lg:-translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold transition-all duration-75 cursor-pointer">
							CONTACT
						</a>
					</li>
					<li className="lg:relative lg:w-28 mb-2 lg:mb-0">
						<Link href="/blog" className="lg:absolute lg:top-0 lg:left-0 lg:-translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold transition-all duration-75 cursor-pointer">
							BLOG
						</Link>
					</li>
				</ul>
				<ul className="flex flex-row items-center">
					<li className="p-4 lg:p-0 lg:mr-2">
						<a href="https://x.com/KaavehTweets" className="cursor-pointer" target="_blank" no-referrer="true">
							<div className="hidden lg:block">
								<IconTwitter width={32} height={32} />
							</div>
							<div className="block lg:hidden">
								<IconTwitter width={48} height={48} />
							</div>
						</a>
					</li>
					<li className="p-4 lg:p-0 lg:mr-2">
						<a href="https://dribbble.com/kaavehdesigns" className="cursor-pointer" target="_blank" no-referrer="true">
							<div className="hidden lg:block">
								<IconDribbble width={32} height={32} />
							</div>
							<div className="block lg:hidden">
								<IconDribbble width={48} height={48} />
							</div>
						</a>
					</li>
					<li className="p-4 lg:p-0 lg:mr-2">
						<a href="https://github.com/kaavehcodes" className="cursor-pointer" target="_blank" no-referrer="true">
							<div className="hidden lg:block">
								<IconGithub width={32} height={32} />
							</div>
							<div className="block lg:hidden">
								<IconGithub width={48} height={48} />
							</div>
						</a>
					</li>
					<li className="p-4 lg:p-0">
						<a href="https://www.linkedin.com/in/kaavehrostami/" className="cursor-pointer" target="_blank" no-referrer="true">
							<div className="hidden lg:block">
								<IconLinkedin width={32} height={32} />
							</div>
							<div className="block lg:hidden">
								<IconLinkedin width={48} height={48} />
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MainMenu