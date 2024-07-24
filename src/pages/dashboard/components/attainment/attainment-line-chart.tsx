import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

interface DataObject {
  month: string;
  opened: number;
  closed: number;
}

interface AttainmentTimeBarProps {
  data: DataObject[];
  strokeColor?: string;
  fillColor?: string;
}

const AttainmentTimeBar: React.FC<AttainmentTimeBarProps> = ({
  data,
  strokeColor = "#B692F6",
  fillColor = "#B692F6",
}) => {
  const [refLineX, setRefLineX] = useState<number | null>(null);

  const handleMouseMove = (e: any) => {
    if (e && e.activeLabel) {
      setRefLineX(e.activeLabel);
    }
  };

  const handleMouseLeave = () => {
    setRefLineX(null);
  };

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 0, left: 10, bottom: 10 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="70%" stopColor={fillColor} stopOpacity={0.2} />
              <stop offset="30%" stopColor={fillColor} stopOpacity={0.5} />
              <stop offset="70%" stopColor={fillColor} stopOpacity={0.2} />
              <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="#f3f6f4"
          />
          <XAxis dataKey="month" axisLine={false} tickLine={false}
            tick={{ fill: "#475467", fontSize: "12px", fontWeight: 500 }}
          >
            <Label
              value="Months"
              offset={0}
              position="bottom"
              style={{ textAnchor: "middle", color: "#475467", fontSize: "12px", fontWeight: 500}}
            />
          </XAxis>
          <YAxis axisLine={false} tickLine={false} 
            tick={{ fill: "#475467", fontSize: "12px", fontWeight: 500 }}
          > 
            <Label
              value="Number of claims"
              offset={0}
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle", color: "#475467", fontSize: "12px", fontWeight: 500 }}
            />
          </YAxis>
          {refLineX !== null && (
            <ReferenceLine x={refLineX} stroke="#8884d8" strokeDasharray="5 5" />
            )
          }
          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const opened = Number(payload[0]?.payload?.opened ?? 0);
                const closed = Number(payload[0]?.payload?.closed ?? 0);
                const total = Number(payload[0]?.payload?.total ?? 0);
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
                      <div className="w-2 h-2 bg-[#17b26a] rounded-full mr-1"></div>
                      <div className="flex justify-between w-full gap-x-16">
                        <span className="text-[10px] font-medium">Opened:</span>
                        <span className="text-[10px] font-medium">{opened}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-[#f44336] rounded-full mr-1"></div>
                      <div className="flex justify-between w-full">
                        <span className="text-[10px] font-medium">Closed:</span>
                        <span className="text-[10px] font-medium">{closed}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#7f56d9] rounded-full mr-1"></div>
                      <div className="flex justify-between w-full">
                        <span className="text-[10px] font-medium">Total:</span>
                        <span className="text-[10px] font-medium">{total}</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="opened"
            stroke={strokeColor}
            fill="url(#colorUv)"
            fillOpacity={1}
            isAnimationActive={true}
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-in-out"    
            activeDot={{ r: 7,
              stroke: "#fff",
              strokeWidth: 3,
              fill:"#7f56d9"
             }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AttainmentTimeBar;
