import Logo from "@/components/Logo";
import LogoType from "@/components/LogoType";
import MainMenu from "@/components/MainMenu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {/* <Logo /> */}
      {/* <h1>KaaVEH ROSTAMI</h1> */}
      <LogoType />
      <MainMenu />
    </main>
  );
}
