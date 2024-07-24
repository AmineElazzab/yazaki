import React, { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

interface DataObject {
  month: number;
  pickup: number;
  dropOff: number;
}

interface MonthlyBusesDensityBarProps {
  data: DataObject[];
}

const CustomLabel = ({ x, y, value }: { x: number; y: number; value: string }) => (
  <g transform={`translate(${x},${y - 12})`} filter="url(#shadow)">
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="1" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.1" />
      </filter>
    </defs>
    <rect x="-25" y="-12" rx="12" ry="12" width="50" height="24" fill="#fff" />
    <polygon points="-30,0 -15,-12 -20,-5 -20,5 -15,12" fill="#fff" />
    <text x="0" y="0" textAnchor="middle" alignmentBaseline="middle" fill="#000" fontSize="12px" fontWeight="500">
      {value}
    </text>
  </g>
);

const MonthlyBusesDensityBar: React.FC<MonthlyBusesDensityBarProps> = ({ data }) => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const updateDimensions = () => {
    if (chartContainerRef.current) {
      const width = chartContainerRef.current.offsetWidth;
      const height = chartContainerRef.current.offsetHeight;
      setChartWidth(width);
      setChartHeight(height);
    }
  };

  useEffect(() => {
    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }

    return () => {
      if (chartContainerRef.current) {
        resizeObserver.unobserve(chartContainerRef.current);
      }
    };
  }, []);

  const maxPickup = Math.max(...data.map((entry) => entry.pickup));
  const yPosition = maxPickup * 0.95;
  const labelX = chartWidth - 32;
  const labelY = chartHeight * 0.11;

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 60, left: 10, bottom: 5 }} barGap={0}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#475467", fontSize: "12px", fontWeight: 500 }}
          />
          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div
                  style={{
                    background: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.05)",
                    fontSize: "10px",
                    padding: "10px",
                  }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#EAECF0]"></div>
                      <div className="flex gap-x-5">
                        <span className="font-medium text-[10px] mr-auto">
                          Drop-off:
                        </span>
                        <span className="font-medium text-[10px]">{payload[1].value}</span>
                      </div>
                    </div>
                    <div className="flex items-center" >
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#B692F6]"></div>
                        <span className="font-medium text-[10px] mr-auto">Pickup:</span>
                        <span className="font-medium text-[10px]">{payload[0].value}</span>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="pickup" fill="#B692F6" barSize={10} radius={[10, 10, 0, 0]} />
          <Bar dataKey="dropOff" fill="#EAECF0" barSize={10} radius={[10, 10, 0, 0]} />
          <ReferenceLine
            y={yPosition}
            stroke="#94DDBC"
            strokeWidth={1.2}
            ifOverflow="extendDomain"
            label={<CustomLabel value="95%" x={labelX} y={labelY} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBusesDensityBar;
