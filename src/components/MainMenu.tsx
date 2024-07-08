"use client";

import styles from "./animation.module.css"

import Link from "next/link"
import IconDribbble from "./icons/IconDribbble"
import IconGithub from "./icons/IconGithub"
import IconLinkedin from "./icons/IconLinkedin"
import IconTwitter from "./icons/IconTwitter"

const MainMenu = () => {
    return (
        <div className="px-0 py-4">
            <div className="flex flex-row items-center justify-between">
                <ul className="flex flex-row items-center">
                    <li className="relative w-36">
                        <Link href="/works" className="absolute top-0 left-0 -translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold cursor-pointer transition-all duration-75">
                            WORKS
                        </Link>
                    </li>
                    <li className="relative w-36">
                        <a href="" className="absolute top-0 left-0 -translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold cursor-pointer transition-all duration-75">
                            ABOUT
                        </a>
                    </li>
                    <li className="relative w-48">
                        <a href="" className="absolute top-0 left-0 -translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold cursor-pointer transition-all duration-75">
                            CONTACT
                        </a>
                    </li>
                    <li className="relative w-28">
                        <Link href="/blog" className="absolute top-0 left-0 -translate-y-1/2 text-3xl hover:text-4xl font-light hover:font-bold cursor-pointer transition-all duration-75">
                            BLOG
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-row items-center">
                    <li className="mr-2">
                        <a href="https://x.com/KaavehTweets" className="cursor-pointer" target="_blank" no-referrer>
                            <IconTwitter width={32} height={32} />
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="https://dribbble.com/kaavehdesigns" className="cursor-pointer" target="_blank" no-referrer>
                            <IconDribbble width={32} height={32} />
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="https://github.com/kaavehcodes" className="cursor-pointer" target="_blank" no-referrer>
                            <IconGithub width={32} height={32} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kaavehrostami/" className="cursor-pointer" target="_blank" no-referrer>
                            <IconLinkedin width={32} height={32} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainMenu