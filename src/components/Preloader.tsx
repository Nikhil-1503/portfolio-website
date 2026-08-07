import { useState, useEffect, useRef, useCallback } from "react";

const logLines = [
  "> Initializing session...",
  "> Loading config...",
  "> Connecting to source...",
  "> Extracting data from source...",
  "> Running transformations...",
  "> Portfolio ready.",
];

const TYPE_SPEED = 25;
const PERIOD_PAUSE = 80;
const LINE_PAUSE = 200;
const SESSION_KEY = "preloader-shown";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const completedRef = useRef(false);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const currentLineText = visibleLines < logLines.length ? logLines[visibleLines] : "";

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    sessionStorage.setItem(SESSION_KEY, "1");
    setFadeOut(true);
    setTimeout(onComplete, 400);
  }, [onComplete]);

  // Skip entirely on repeat visits or reduced-motion preference
  useEffect(() => {
    if (prefersReducedMotion.current || sessionStorage.getItem(SESSION_KEY)) {
      finish();
    }
  }, [finish]);

  // Let users skip with a click or key press
  useEffect(() => {
    const skip = () => finish();
    window.addEventListener("click", skip);
    window.addEventListener("keydown", skip);
    return () => {
      window.removeEventListener("click", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [finish]);

  // Typing effect
  useEffect(() => {
    if (completedRef.current) return;

    if (visibleLines >= logLines.length) {
      const t = setTimeout(finish, 500);
      return () => clearTimeout(t);
    }

    if (typedChars < currentLineText.length) {
      const speed = currentLineText[typedChars] === "." ? PERIOD_PAUSE : TYPE_SPEED;
      const t = setTimeout(() => setTypedChars((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setTypedChars(0);
    }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [visibleLines, typedChars, currentLineText, finish]);

  const totalChars = logLines.reduce((sum, l) => sum + l.length, 0);
  const typedSoFar =
    logLines.slice(0, visibleLines).reduce((sum, l) => sum + l.length, 0) + typedChars;
  const progress = Math.min(100, (typedSoFar / totalChars) * 100);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-hidden={fadeOut}
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-500 cursor-pointer ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-xl mx-4">
        <div
          className="rounded-lg border border-border overflow-hidden shadow-2xl"
          style={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.1)" }}
        >
          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">
              nikhilshanbhag@pipeline ~ run portfolio.py
            </span>
          </div>

          <div className="bg-card p-5 font-mono text-sm min-h-[280px]">
            {logLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="mb-1.5 text-primary/90">
                {line}
              </div>
            ))}

            {visibleLines < logLines.length && (
              <div className="mb-1.5 text-primary">
                {currentLineText.slice(0, typedChars)}
                <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse align-middle" />
              </div>
            )}

            {visibleLines >= logLines.length && !fadeOut && (
              <div className="text-primary">
                <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-center text-[11px] text-muted-foreground font-mono">
          click or press any key to skip
        </p>
      </div>
    </div>
  );
};

export default Preloader;