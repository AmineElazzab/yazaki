import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine
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
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const handleClick = (e: any) => {
    if (e && e.activeLabel) {
      setSelectedMonth(e.activeLabel);
    }
  };

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 0, left: 10, bottom: 10 }}
          onClick={handleClick}
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
              style={{ textAnchor: "middle", color: "#475467", fontSize: "12px", fontWeight: 500 }}
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
          {selectedMonth && (
            <ReferenceLine x={selectedMonth} stroke="#8884d8" strokeDasharray="5 5"
            />
          )}
          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const opened = Number(payload[0]?.payload?.opened ?? 0);
                const closed = Number(payload[0]?.payload?.closed ?? 0);
                const total = opened + closed;

                return (
                  <div
                    style={{
                      background: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                      fontSize: "10px",
                      padding: "10px",
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <div style={{ width: "10px", height: "10px", backgroundColor: "#17b26a", borderRadius: "50%", marginRight: '5px' }}></div>
                      <div className="flex justify-between w-full gap-x-5">
                        <span style={{ marginRight: 'auto', fontSize: '12px', fontWeight: '500' }}>Opened:</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>{opened}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div style={{ width: "10px", height: "10px", backgroundColor: "#f04438", borderRadius: "50%", marginRight: '5px' }}></div>
                      <div className="flex justify-between w-full">
                        <span style={{ marginRight: 'auto', fontSize: '12px', fontWeight: '500' }}>Closed:</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>{closed}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div style={{ width: "10px", height: "10px", backgroundColor: "#7f56d9", borderRadius: "50%", marginRight: '5px' }}></div>
                      <div className="flex justify-between w-full">
                        <span style={{ marginRight: 'auto', fontSize: '12px', fontWeight: '500' }}>Total:</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>{total}</span>
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
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

AttainmentTimeBar.defaultProps = {
  strokeColor: "#B692F6",
  fillColor: "#B692F6",
};

export default AttainmentTimeBar;