"use client";
import { motion } from "framer-motion";

export default function LeaderboardSection() {
  const leaderboard = [
    { name: "GoldHunter v3", tag: "GOLD", pnl: "+42.4%", dd: "11.2%" },
    { name: "XAU Breakout 2.1", tag: "SILVER", pnl: "+33.9%", dd: "9.4%" },
    { name: "PulseGrid Lite", tag: "BRONZE", pnl: "+28.1%", dd: "14.7%" },
    { name: "NeonScalper", pnl: "+21.3%", dd: "10%" },
    { name: "ApexWave", pnl: "+18.6%", dd: "8.9%" },
  ];

  return (
    <section
      id="leaderboard"
      className="mx-auto max-w-5xl px-6 py-24 text-white"
    >
      <h2 className="mb-10 text-3xl font-bold text-cyan-300">
        Live Leaderboard
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-[0_0_40px_rgba(34,211,238,0.18)]"
      >
        <ul className="space-y-3">
          {leaderboard.map((ea, i) => (
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
    </section>
  );
}
