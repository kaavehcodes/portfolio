import Image from "next/image"
import Link from "next/link"

import { works, posts } from "#site/content"
import { sortItems } from "@/lib/utils"
import { SKILLS } from "@/lib/data-skills"

import Logo from "@/components/Logo"
import LogoType from "@/components/LogoType"
import MainMenu from "@/components/MainMenu"
import Navbar from "@/components/Navbar"
import Tableau from "@/components/Tableau"
import SkillTag from "@/components/SkillTag"

import FormContact from "@/components/FormContact"
import BlogPost from "@/components/BlogPost"
import HorizontalScroll from "@/components/HorizontalScroll"
import IconArrowRight from "@/components/icons/IconArrowRight"

export default function Home() {
	const sortedPosts = sortItems(posts.filter((post) => post.published))
	const sortedWorks = sortItems(works.filter((work) => work.published))

	const displayPosts = sortedPosts
	const displayWorks = sortedWorks

	return (
		<main className="relative">

			<HorizontalScroll>

				<section className="flex justify-center">
					<div className="min-h-screen lg:w-screen flex flex-col items-center lg:justify-center">
						{/* Mobile */}
						<div className="block lg:hidden tracking-widest px-4">
							<Navbar />
							<Logo width={500} height={144} />
							<MainMenu />
						</div>
						{/* Desktop */}
						<div className="hidden lg:block">
							<Navbar />
							<LogoType width={846} height={144} letters={true} />
							<MainMenu />
						</div>
					</div>
				</section>

				<section className="lg:flex lg:items-center">
					<div className="py-4 lg:py-8">
						<h2 className="text-8xl lg:text-10xl font-light uppercase text-timberwolf origin-center lg:rotate-90">WORKS</h2>
					</div>
					<div className="lg:w-max grid grid-flow-row auto-rows-max lg:grid-flow-col lg:auto-cols-max">
						{displayWorks.map((work) => {
							const { slug, slugAsParams, title } = work
							return <Tableau key={slug} title={title} slug={slug} image={slugAsParams} />
						})}
					</div>
				</section>

				<section className="lg:flex lg:items-center py-16 lg:px-32">
					<div id="about_section" className="py-4 lg:py-8">
						<h2 className="text-8xl text-10xl font-light uppercase text-timberwolf lg:origin-center lg:rotate-90">ABOUT</h2>
					</div>
					<div className="lg:w-max lg:px-16 lg:mr-32">
						<p className="text-4xl font-light mb-8">Hey,</p>
						<p className="text-xl font-light mb-4">
							I am Kaaveh, a product designer who also knows how to make video games.
						</p>
						<p className="text-xl font-light">
							My focus is on creating products that use game mechanics, artificial intelligence,
						</p>
						<p className="text-xl font-light">
							and augmented reality to make learning tailored, effective, and fun.
						</p>
					</div>
					<div className="flex flex-col lg:px-16">
						<div className="mb-8">
							<h3 className="text-3xl font-light mb-4">My Toolbox</h3>
							<div className="w-128 flex flex-wrap">
								{SKILLS.map((skill, id) => (
									skill.type === "hard-skill" ? <SkillTag key={id} variant="default" text={skill.title} /> : null
								))}
							</div>
							<div className="w-128 flex flex-wrap">
								{SKILLS.map((skill, id) => (
									skill.type === "soft-skill" ? <SkillTag key={id} variant="black" text={skill.title} /> : null
								))}
							</div>
						</div>
						<div className="mb-8">
							<h4 className="text-3xl font-light mb-4">Design</h4>
							<div className="w-128 flex flex-wrap">
								{SKILLS.map((skill, id) => (
									skill.type === "design" ? <SkillTag key={id} variant="icon" image={skill.image} text={skill.title} /> : null
								))}
							</div>
						</div>
						<div className="mb-8">
							<h4 className="text-3xl font-light mb-4">Development</h4>
							<div className="w-128 flex flex-wrap">
								{SKILLS.map((skill, id) => (
									skill.type === "develop" ? <SkillTag key={id} variant="icon" image={skill.image} text={skill.title} /> : null
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="lg:flex lg:items-center py-16 lg:px-32">
					<div id="contact_section" className="py-4 lg:py-8">
						<h2 className="text-8xl text-10xl font-light uppercase text-timberwolf lg:origin-center lg:rotate-90">CONTACT</h2>
					</div>
					<div className="flex flex-col items-center">
						<p className="text-4xl font-thin mb-8">Send me a message</p>
						<FormContact />
					</div>
				</section>

				<section className="lg:flex lg:items-center py-16 lg:px-32">
					<div className="py-4 lg:py-8">
						<h2 className="text-8xl lg:text-10xl font-light uppercase text-timberwolf lg:origin-center lg:rotate-90">BLOG</h2>
					</div>
					<div className="flex flex-col">
						<div className="w-max">
							{displayPosts?.length > 0 ? (
								<ul className="flex flex-col">
									{displayPosts.map((post) => {
										const { slug, title, description, date } = post
										return <li key={slug}>
											<BlogPost slug={slug} title={title} description={description} date={date} />
										</li>
									})}
								</ul>
							) : (
								<p>No blog posts yet</p>
							)}
						</div>
						<div>
							<Link href="/blog" className="flex flex-row">
								<p className="text-xl font-light uppercase mr-2">Go to blog</p>
								<IconArrowRight width={24} height={24} />
							</Link>
						</div>
					</div>
				</section>

			</HorizontalScroll>

		</main>
	);
}
