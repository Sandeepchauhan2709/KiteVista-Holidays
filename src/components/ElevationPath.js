export default function ElevationPath({ itinerary }) {
  const maxElevation = Math.max(...itinerary.map((s) => s.elevation));

  return (
    <div className="relative pl-8">
      <div className="absolute left-3 top-2 bottom-2 w-px bg-stone/30" />
      <div className="space-y-8">
        {itinerary.map((stop, i) => (
          <div key={i} className="relative">
            <span
              className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-marigold ring-4 ring-snow"
              style={{ opacity: 0.5 + 0.5 * (stop.elevation / maxElevation) }}
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-mono text-xs text-marigold">DAY {stop.day}</span>
              <h4 className="font-display text-lg text-ink">{stop.title}</h4>
              <span className="font-mono text-xs text-stone">{stop.elevation.toLocaleString()}m</span>
            </div>
            <p className="text-stone text-sm mt-1 max-w-xl">{stop.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}