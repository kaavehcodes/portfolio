import Logo from "@/components/Logo";
import LogoType from "@/components/LogoType";
import MainMenu from "@/components/MainMenu";
import Navbar from "@/components/Navbar";
import Tableau from "@/components/Tableau";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-fit h-full">
          <Navbar />
          <LogoType />
          <MainMenu />
        </div>
      </section>
      <section className="min-h-screen">
        <div className="flex flex-row items-center justify-center m-8">
          <h2 className="text-8xl font-light uppercase">WORKS</h2>
        </div>
        <div>Filters</div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Tableau title="Wear Vintage" description="Online shop for vintage fashion" />
          <Tableau title="Wear Vintage" description="Online shop for vintage fashion" />
          <Tableau title="Wear Vintage" description="Online shop for vintage fashion" />
        </div>
        <div>
          <Link href="/works">VIEW ALL</Link>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="flex flex-row items-center justify-center m-8">
          <h2 className="text-8xl font-light uppercase">ABOUT</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-1/2 px-4">
            <p className="text-3xl font-light mb-8">Hey,</p>
            <p className="text-xl font-light mb-4">
              I am Kaaveh, a product designer who also knows how to make video games.
            </p>
            <p className="text-xl font-light mb-4">
              I believe, the future of the web is three-dimensional and AI-powered.
              I prepare for this shift by researching trends, exploring new ideas,
              and experimenting with different interactions.
            </p>
            <p className="text-xl font-light">
              My focus is on creating products that use game mechanics, artificial intelligence,
              and augmented reality to make learning tailored, effective, and fun.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="flex flex-row items-center justify-center m-8">
          <h2 className="text-8xl font-light uppercase">CONTACT</h2>
        </div>
        <div>

        </div>
      </section>
      <section className="min-h-screen">
        <div className="flex flex-row items-center justify-center m-8">
          <h2 className="text-8xl font-light uppercase">BLOG</h2>
        </div>
        <div>

        </div>
      </section>
    </main>
  );
}
