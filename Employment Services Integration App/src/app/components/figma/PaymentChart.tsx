import { useState } from "react";

const paymentData = [
  { name: "1月", amount: 1500 },
  { name: "2月", amount: 1520 },
  { name: "3月", amount: 1540 },
  { name: "4月", amount: 1600 },
  { name: "5月", amount: 1620 },
  { name: "6月", amount: 1650 },
];

const maxAmount = Math.max(...paymentData.map(d => d.amount));
const minAmount = Math.min(...paymentData.map(d => d.amount));
const range = maxAmount - minAmount || 1;

function createAreaPath(points: { x: number; y: number }[], width: number, height: number) {
  if (points.length === 0) return "";
  
  const pathPoints = points.map((p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = points[i - 1];
    const cpX = (prev.x + p.x) / 2;
    return `C ${cpX} ${prev.y}, ${cpX} ${p.y}, ${p.x} ${p.y}`;
  }).join(" ");
  
  return `${pathPoints} L ${width} ${height} L 0 ${height} Z`;
}

export function PaymentChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const padding = { top: 20, right: 30, bottom: 40, left: 30 };
  const width = 800;
  const height = 288;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = paymentData.map((d, i) => ({
    x: padding.left + (i / (paymentData.length - 1)) * chartWidth,
    y: padding.top + chartHeight - ((d.amount - minAmount) / range) * chartHeight * 0.85,
    data: d,
    index: i,
  }));

  const areaPath = createAreaPath(points, width - padding.right, height - padding.bottom);

  const gradientId = "chartGradient";

  return (
    <div className="h-72 w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
          const y = padding.top + ratio * chartHeight;
          return (
            <g key={i}>
              <line
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#e2e8f0"
                strokeDasharray="4 4"
              />
              <text
                x={padding.left - 8}
                y={y + 4}
                textAnchor="end"
                className="text-xs fill-slate-500"
              >
                {Math.round(maxAmount - ratio * range)}
              </text>
            </g>
          );
        })}

        <path
          d={areaPath}
          fill={`url(#${gradientId})`}
          className="transition-all duration-300"
        />

        <path
          d={areaPath.replace(` L ${width - padding.right} ${height - padding.bottom} L 0 ${height - padding.bottom} Z`, "")}
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          filter="url(#glow)"
          className="transition-all duration-300"
        />

        {points.map((point) => (
          <g
            key={point.index}
            onMouseEnter={() => setHoveredIndex(point.index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-pointer"
          >
            <circle
              cx={point.x}
              cy={point.y}
              r={hoveredIndex === point.index ? 6 : 4}
              fill="#fff"
              stroke="#2563eb"
              strokeWidth={hoveredIndex === point.index ? 3 : 2}
              className="transition-all duration-200"
            />
          </g>
        ))}

        {paymentData.map((d, i) => {
          const x = padding.left + (i / (paymentData.length - 1)) * chartWidth;
          return (
            <text
              key={i}
              x={x}
              y={height - 10}
              textAnchor="middle"
              className="text-xs fill-slate-500"
            >
              {d.name}
            </text>
          );
        })}

        {hoveredIndex !== null && (
          <g>
            <line
              x1={points[hoveredIndex].x}
              y1={padding.top}
              x2={points[hoveredIndex].x}
              y2={height - padding.bottom}
              stroke="#cbd5e1"
              strokeDasharray="4 4"
              strokeOpacity="0.5"
            />
            <rect
              x={points[hoveredIndex].x - 40}
              y={points[hoveredIndex].y - 35}
              width="80"
              height="28"
              rx="6"
              fill="#1e293b"
              className="shadow-lg"
            />
            <text
              x={points[hoveredIndex].x}
              y={points[hoveredIndex].y - 16}
              textAnchor="middle"
              className="text-xs fill-white font-semibold"
            >
              ¥{points[hoveredIndex].data.amount}
            </text>
            <text
              x={points[hoveredIndex].x}
              y={points[hoveredIndex].y - 28}
              textAnchor="middle"
              className="text-[10px] fill-slate-400"
            >
              {points[hoveredIndex].data.name}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}