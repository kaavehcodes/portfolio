import { SKILLS } from "@/content/data-skills";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/components/Logo";
import LogoType from "@/components/LogoType";
import MainMenu from "@/components/MainMenu";
import Navbar from "@/components/Navbar";
import Tableau from "@/components/Tableau";
import SkillTag from "@/components/SkillTag";

import FormContact from "@/components/FormContact";
import BlogPost from "@/components/BlogPost";
import IconDribbble from "@/components/icons/IconDribbble"
import IconGithub from "@/components/icons/IconGithub"
import IconLinkedin from "@/components/icons/IconLinkedin"
import IconTwitter from "@/components/icons/IconTwitter"
import HorizontalScroll from "@/components/HorizontalScroll";

export default function Home() {
  return (
    <main className="relative">

      <HorizontalScroll>

        <section className="flex justify-center">
          <div className="min-h-screen w-screen flex flex-col items-center justify-center">
            <div>
              <Navbar />
              <LogoType />
              <MainMenu />
            </div>
          </div>
        </section>

        <section className="flex items-center">
          <div className="py-8">
            <h2 className="text-10xl font-light uppercase text-timberwolf origin-center rotate-90">WORKS</h2>
          </div>
          <div className="w-max grid grid-cols-1 md:grid-cols-3">
            <Tableau title="Wear Vintage" description="Online shop for vintage fashion" />
            <Tableau title="Wear Vintage" description="Online shop for vintage fashion" />
            <Tableau title="Wear Vintage" description="Online shop for vintage fashion" />
          </div>
        </section>

        <section className="flex items-center px-32">
          <div className="py-8">
            <h2 className="text-10xl font-light uppercase text-timberwolf origin-center rotate-90">ABOUT</h2>
          </div>
          <div className="w-max px-16 mr-32">
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
          <div className="flex flex-col px-16">
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

        <section className="flex items-center px-32">
          <div className="py-8">
            <h2 className="text-10xl font-light uppercase text-timberwolf origin-center rotate-90">CONTACT</h2>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-thin mb-8">Send me a message</p>
            <FormContact />
          </div>
        </section>

        <section className="flex items-center px-32">
          <div className="py-8">
            <h2 className="text-10xl font-light uppercase text-timberwolf origin-center rotate-90">BLOG</h2>
          </div>
          <div className="w-max">
            <div className="">
              <BlogPost />
            </div>
          </div>
        </section>

        {/* <footer>
          <figure>Glasses</figure>
          <p>Slogan</p>
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
          <p>Copyright</p>
        </footer> */}

      </HorizontalScroll>

    </main>
  );
}
