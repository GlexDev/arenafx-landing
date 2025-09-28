import Head from "next/head";
import Navbar from "../components/Navbar";
import ArenaFXHero from "../components/ArenaFXHero";
import RulesSection from "../components/RulesSection";
import LeaderboardSection from "../components/LeaderboardSection";
import Footer from "../components/Footer";

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
