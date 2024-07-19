import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

interface DataObject {
  count: number;
}

interface KpiAverageLineChartProps {
  data: DataObject[];
  strokeColor: string;
}

const KpiAverageLineChartComponent: React.FC<KpiAverageLineChartProps> = ({
  data,
  strokeColor = 'green',
}) => {
  const tooltipStyle = {
    backgroundColor: strokeColor,
    color: '#fff',
    borderRadius: '5px',
    boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.25)',
    fontSize: '12px',
    padding: '5px',
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div style={tooltipStyle}>
          <p className="label">{`Count: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${strokeColor}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor={strokeColor} stopOpacity={0.2} />
              <stop offset="60%" stopColor={strokeColor} stopOpacity={0.1} />
              <stop offset="90%" stopColor={strokeColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
          <Area
            type="monotone"
            dataKey="count"
            stroke={strokeColor}
            fill={`url(#gradient-${strokeColor})`}
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiAverageLineChartComponent;
