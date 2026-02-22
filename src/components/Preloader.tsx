import { useState, useEffect, useCallback } from "react";

const logLines = [
  { text: "> Initializing Spark session...", delay: 0 },
  { text: "> Loading pipeline config...", delay: 400 },
  { text: "> Connecting to Azure Data Lake...", delay: 800 },
  { text: "> Extracting data from source...", delay: 1200 },
  { text: "> Running transformations...", delay: 1600 },
  { text: "> Validating schema integrity...", delay: 2000 },
  { text: "> Writing to Delta Lake...", delay: 2400 },
  { text: "> DAG execution complete ✓", delay: 2800 },
  { text: "> Portfolio ready.", delay: 3200 },
];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typedChars, setTypedChars] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState(false);

  const currentLineText = visibleLines < logLines.length ? logLines[visibleLines].text : "";

  // Type characters one by one for the current line
  useEffect(() => {
    if (visibleLines >= logLines.length) {
      const timer = setTimeout(() => setFadeOut(true), 400);
      const endTimer = setTimeout(onComplete, 900);
      return () => { clearTimeout(timer); clearTimeout(endTimer); };
    }

    if (typedChars < currentLineText.length) {
      const speed = currentLineText[typedChars] === "." ? 80 : 25;
      const timer = setTimeout(() => setTypedChars((c) => c + 1), speed);
      return () => clearTimeout(timer);
    } else {
      // Line done, move to next
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setTypedChars(0);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, typedChars, currentLineText, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-xl mx-4">
        {/* Terminal window */}
        <div className="rounded-lg border border-border overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 40px hsl(142 72% 48% / 0.1)" }}>
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">nikhil@pipeline ~ run portfolio.py</span>
          </div>

          {/* Terminal body */}
          <div className="bg-card p-5 font-mono text-sm min-h-[280px]">
            {logLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="mb-1.5 text-primary/90">
                {line.text}
              </div>
            ))}

            {/* Currently typing line */}
            {visibleLines < logLines.length && (
              <div className="mb-1.5 text-primary">
                {currentLineText.slice(0, typedChars)}
                <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse align-middle" />
              </div>
            )}

            {/* Blinking cursor after done */}
            {visibleLines >= logLines.length && !fadeOut && (
              <div className="text-primary">
                <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(visibleLines / logLines.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
