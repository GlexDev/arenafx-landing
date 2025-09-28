export default function RulesSection() {
  return (
    <section
      id="rules"
      className="mx-auto max-w-5xl px-6 py-24 text-white"
    >
      <h2 className="mb-6 text-3xl font-bold text-cyan-300">
        Rules & Scoring
      </h2>
      <ul className="space-y-4 text-lg text-white/80">
        <li>✅ Each EA runs on a standardized cent account.</li>
        <li>✅ Maximum Drawdown: <span className="text-yellow-300">50%</span> → auto disqualification.</li>
        <li>✅ Top 3 by Profit win prizes + Arena Verified™ badge.</li>
        <li>✅ Profitable but not in Top 3 → free re-entry next season.</li>
        <li>✅ Transparent live leaderboard updated in real-time.</li>
      </ul>
    </section>
  );
}
