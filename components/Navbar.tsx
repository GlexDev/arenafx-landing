"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="ArenaFX" width={28} height={28} />
          <span className="text-lg font-bold text-white">ArenaFX</span>
        </Link>

        {/* Right: Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#leaderboard" className="text-white/70 hover:text-cyan-300">
            Leaderboard
          </Link>
          <Link href="#rules" className="text-white/70 hover:text-cyan-300">
            Rules
          </Link>
          <Link
            href="#bot"
            className="rounded-lg bg-cyan-400/20 px-4 py-2 text-cyan-300 hover:bg-cyan-400/30"
          >
            Join Season 1
          </Link>
        </nav>
      </div>
    </header>
  );
}
