import Logo from "@/components/Logo";
import LogoType from "@/components/LogoType";
import MainMenu from "@/components/MainMenu";
import Navbar from "@/components/Navbar";
import Tableau from "@/components/Tableau";
import Image from "next/image";

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
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Tableau title="Wear Vintage" description="Online shop for vintage fashion" />
          <Tableau title="Wear Vintage" description="Online shop for vintage fashion" />
          <Tableau title="Wear Vintage" description="Online shop for vintage fashion" />
        </div>
      </section>
    </main>
  );
}
