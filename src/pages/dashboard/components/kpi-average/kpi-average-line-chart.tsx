import React from "react";
import { Area, AreaChart, DotProps, ResponsiveContainer, Tooltip } from "recharts";

interface DataObject {
  month: string;
  count: number;
}

interface KpiAverageLineChartProps {
  data: DataObject[];
  strokeColor?: string;
}

interface CustomDotProps extends DotProps {}

const CustomDot: React.FC<CustomDotProps> = (props) => {
  const { cx, cy, stroke } = props;
  console.log('CustomDot Rendered', { cx, cy, stroke });

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={8}
        stroke={`url(#gradient-${stroke})`}
        strokeWidth={2}
        fill="transparent"
      />
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke={stroke}
        strokeWidth={2}
        fill="#fff"
      />
    </g>
  );
};

const KpiAverageLineChartComponent: React.FC<KpiAverageLineChartProps> = ({
  data,
  strokeColor = "green",
}) => {
  console.log("Data:", data);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height={80}>
        <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${strokeColor}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor={strokeColor} stopOpacity={0.2} />
              <stop offset="60%" stopColor={strokeColor} stopOpacity={0.1} />
              <stop offset="90%" stopColor={strokeColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length > 0) {
                console.log("Tooltip Payload", payload);
                const { month, count } = payload[0].payload;
                const value = payload[0].value;

                return (
                  <div className="bg-white p-2 rounded-md shadow-md flex items-center">
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: strokeColor,
                        borderRadius: "50%",
                        marginRight: "5px",
                      }}
                    ></div>
                    <div className="flex gap-x-5 font-medium text-xs">
                      <span className="text-xs font-medium">{month}:</span>
                      <span className="text-xs font-medium">{value}</span>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke={strokeColor}
            fill={`url(#gradient-${strokeColor})`}
            fillOpacity={1}
            activeDot={(props) => <CustomDot {...props} stroke={strokeColor} />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiAverageLineChartComponent;
