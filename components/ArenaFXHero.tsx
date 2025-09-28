"use client";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, ShieldCheck, Sparkles } from "lucide-react";

export default function ArenaFXHero() {
  return (
    <div className="relative overflow-hidden bg-[#07090c] text-white">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Hero container */}
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-sm font-medium text-yellow-300">
              <Sparkles className="h-4 w-4" /> Arena Verified™ — Battle-tested EAs
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
            >
              <span className="block text-white">No Backtests.</span>
              <span className="block text-cyan-400">Only Battles.</span>
            </motion.h1>
            <p className="mt-6 text-lg text-white/70">
              Enter your EA. We run it live on standardized cent accounts. Top performers win prizes and get listed with the{" "}
              <span className="text-yellow-300">Arena Verified™</span> badge. Built for creators, traders, and teams tired of fake curve-fits.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#bot"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/20 px-6 py-3 font-semibold text-cyan-300 backdrop-blur transition hover:bg-cyan-500/30"
              >
                <Trophy className="h-5 w-5" /> Join Season 1
              </a>
              <a
                href="#rules"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white/70 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <ShieldCheck className="h-5 w-5" /> Rules & Scoring
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-cyan-400" /> Live leaderboard</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-yellow-400" /> 50% Max DD auto-DQ</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-400" /> Profitable re-entry</span>
            </div>
          </div>

          {/* Right column — Leaderboard card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative rounded-2xl border border-white/10 bg-black/30 p-6 shadow-[0_0_40px_rgba(34,211,238,0.18)]"
          >
            <div className="mb-4 flex items-center justify-between text-sm text-white/60">
              <span className="flex items-center gap-2">
                <img src="/favicon.ico" alt="ArenaFX" className="h-5 w-5" />
                arenafx.trade
              </span>
              <a
                href="#leaderboard"
                className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300 hover:bg-cyan-400/20"
              >
                View Leaderboard →
              </a>
            </div>
            <ul className="space-y-3">
              {[
                { name: "GoldHunter v3", tag: "GOLD", pnl: "+42.4%", dd: "11.2%" },
                { name: "XAU Breakout 2.1", tag: "SILVER", pnl: "+33.9%", dd: "9.4%" },
                { name: "PulseGrid Lite", tag: "BRONZE", pnl: "+28.1%", dd: "14.7%" },
                { name: "NeonScalper", pnl: "+21.3%", dd: "10%" },
                { name: "ApexWave", pnl: "+18.6%", dd: "8.9%" },
              ].map((ea, i) => (
                <li
                  key={ea.name}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-sm"
                >
                  <span className="flex items-center gap-2 font-medium text-white/80">
                    <span className="text-white/50">{i + 1}</span> {ea.name}
                    {ea.tag && (
                      <span className="rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-xs text-white/60">
                        {ea.tag}
                      </span>
                    )}
                  </span>
                  <span className="flex gap-4">
                    <span className="text-green-400">PnL {ea.pnl}</span>
                    <span className="text-red-400">DD {ea.dd}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Telegram Bot CTA (no QR) */}
      <div id="bot" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left: Button only */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-center">
            <a
              href="https://t.me/arenafx_bot"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/20 px-5 py-4 font-medium text-white hover:border-cyan-300 hover:bg-cyan-400/30 text-lg"
            >
              Open @arenafx_bot <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-3 text-center text-xs text-white/50">
              Or search <span className="text-white/70">@arenafx_bot</span> in Telegram
            </p>
          </div>

          {/* Right: Steps */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white/90">Submit your EA in 3 steps</h3>
            <ol className="space-y-3 text-white/80">
              <li>1️⃣ Start the bot → <span className="font-medium">Join Season 1</span></li>
              <li>2️⃣ Pay entry fee → Upload <code>.ex5</code> + setfile</li>
              <li>
                3️⃣ We deploy → Track your rank on{" "}
                <a href="#leaderboard" className="text-cyan-300 hover:underline">leaderboard</a>
              </li>
            </ol>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3 text-sm text-white/60">
              <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-center">USDT / Fiat accepted</div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-center">
                Auto DQ at <span className="text-yellow-300">50% DD</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-center">Profitable = free re-entry</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
