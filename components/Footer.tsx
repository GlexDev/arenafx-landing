export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand blurb */}
        <div>
          <div className="text-lg font-bold text-white">ArenaFX</div>
          <p className="mt-2 text-sm">
            No Backtests. Only Battles. Live competitions for EAs with transparent
            leaderboards and the Arena Verified™ badge.
          </p>
        </div>

        {/* Quick links */}
        <nav className="grid gap-2 text-sm">
          <a href="#leaderboard" className="hover:text-cyan-300">Leaderboard</a>
          <a href="#rules" className="hover:text-cyan-300">Rules &amp; Scoring</a>
          <a href="#bot" className="hover:text-cyan-300">Join Season 1</a>
        </nav>

        {/* Contact / Social */}
        <div className="text-sm">
          <div>Contact</div>
          <div className="mt-2">
            <a href="mailto:team@arenafx.trade" className="hover:text-cyan-300">
              team@arenafx.trade
            </a>
          </div>
          <div className="mt-3 flex gap-4">
            <a href="https://t.me/arenafx_bot" className="hover:text-cyan-300">@arenafx_bot</a>
            <a href="#" className="hover:text-cyan-300">X (Twitter)</a>
            <a href="#" className="hover:text-cyan-300">Telegram Channel</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/50 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} ArenaFX. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70">Terms</a>
            <a href="#" className="hover:text-white/70">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
