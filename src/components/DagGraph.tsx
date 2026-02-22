import { useEffect, useState } from "react";

interface DagNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface DagEdge {
  from: string;
  to: string;
}

const nodes: DagNode[] = [
  { id: "extract", label: "Extract", x: 60, y: 100 },
  { id: "validate", label: "Validate", x: 220, y: 50 },
  { id: "clean", label: "Clean", x: 220, y: 150 },
  { id: "transform", label: "Transform", x: 380, y: 100 },
  { id: "enrich", label: "Enrich", x: 540, y: 50 },
  { id: "load", label: "Load", x: 540, y: 150 },
  { id: "report", label: "Report", x: 700, y: 100 },
];

const edges: DagEdge[] = [
  { from: "extract", to: "validate" },
  { from: "extract", to: "clean" },
  { from: "validate", to: "transform" },
  { from: "clean", to: "transform" },
  { from: "transform", to: "enrich" },
  { from: "transform", to: "load" },
  { from: "enrich", to: "report" },
  { from: "load", to: "report" },
];

const getNode = (id: string) => nodes.find((n) => n.id === id)!;

const DagGraph = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (nodes.length + 2));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-x-auto py-6">
      <svg viewBox="0 0 780 200" className="w-full max-w-3xl mx-auto" style={{ minWidth: 500 }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(142 72% 48% / 0.4)" />
          </marker>
          <marker id="arrow-active" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(142 72% 48%)" />
          </marker>
        </defs>

        {/* Edges */}
        {edges.map((edge) => {
          const from = getNode(edge.from);
          const to = getNode(edge.to);
          const fromIdx = nodes.indexOf(from);
          const toIdx = nodes.indexOf(to);
          const isActive = fromIdx < activeIndex && toIdx <= activeIndex;

          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x + 40}
              y1={from.y}
              x2={to.x - 40}
              y2={to.y}
              stroke={isActive ? "hsl(142 72% 48%)" : "hsl(142 72% 48% / 0.15)"}
              strokeWidth={isActive ? 2 : 1}
              markerEnd={isActive ? "url(#arrow-active)" : "url(#arrow)"}
              className="transition-all duration-500"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isActive = i <= activeIndex;
          const isCurrent = i === activeIndex;

          return (
            <g key={node.id} className="transition-all duration-500">
              <rect
                x={node.x - 38}
                y={node.y - 18}
                width={76}
                height={36}
                rx={6}
                fill={isActive ? "hsl(142 72% 48% / 0.15)" : "hsl(220 18% 10%)"}
                stroke={isActive ? "hsl(142 72% 48%)" : "hsl(220 14% 18%)"}
                strokeWidth={isCurrent ? 2 : 1}
                filter={isCurrent ? "url(#glow)" : undefined}
                className="transition-all duration-500"
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill={isActive ? "hsl(142 72% 48%)" : "hsl(220 10% 55%)"}
                fontSize="11"
                fontFamily="JetBrains Mono, monospace"
                className="transition-all duration-500"
              >
                {node.label}
              </text>

              {/* Pulse ring on current */}
              {isCurrent && (
                <rect
                  x={node.x - 38}
                  y={node.y - 18}
                  width={76}
                  height={36}
                  rx={6}
                  fill="none"
                  stroke="hsl(142 72% 48%)"
                  strokeWidth={1}
                  opacity={0.4}
                  className="animate-ping"
                  style={{ transformOrigin: `${node.x}px ${node.y}px`, animationDuration: "1.5s" }}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default DagGraph;
