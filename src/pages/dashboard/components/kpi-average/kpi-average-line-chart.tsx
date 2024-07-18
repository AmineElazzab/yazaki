import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, } from 'recharts';

interface DataObject {
  count: number;
}

interface KpiAverageLineChartProps {
  data: DataObject[];
  strokeColor: string;
}

const KpiAverageLineChartComponent: React.FC<KpiAverageLineChartProps> = ({
  data,
  strokeColor = '#000',
}) => {


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={strokeColor} x1="0" y1="0" x2="0" y2="1">
              <stop offset="70%" stopColor={strokeColor} stopOpacity={0.2} />
              <stop offset="30%" stopColor={strokeColor} stopOpacity={0.5} />
              <stop offset="70%" stopColor={strokeColor} stopOpacity={0.2} />
              <stop offset="95%" stopColor={strokeColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            cursor={{ fill: 'transparent' }}
            contentStyle={{
              background: '#000',
              border: 'none',
              borderRadius: '5px',
              boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.25)',
              fontSize: '10px',
              paddingLeft: '30px',
              paddingRight: '30px',
              paddingTop: '5px',
              paddingBottom: '3px',
            }}
            labelStyle={{
              color: '#fff',
              fontSize: '8px',
              lineHeight: '8px',
              fontWeight: 300,
            }}
            itemStyle={{
              color: '#fff',
              fontSize: '8px',
              lineHeight: '8px',
              fontWeight: 500,
            }}
            wrapperStyle={{
              border: 'none',
              borderRadius: '0',
              boxShadow: 'none',
              color: '#B5B5BB',
              fontSize: '10px',
              padding: '0',
            }}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke={strokeColor}
            fill={`url(#${strokeColor})`}
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiAverageLineChartComponent;
