import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import RulesSection from "../components/RulesSection";
import LeaderboardSection from "../components/LeaderboardSection";
import Footer from "../components/Footer";

const ArenaFXHero = dynamic(() => import("../components/ArenaFXHero"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>ArenaFX — No Backtests. Only Battles.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar />
        <ArenaFXHero />
        <RulesSection />
        <LeaderboardSection />
        <Footer />
      </main>
    </>
  );
}

