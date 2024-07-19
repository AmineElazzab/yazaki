import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface DataObject {
  month: string;
  lateArrivalsBusesCount: number;
  onTimeArrivalsBusesCount: number;
}

interface ArrivalsTimeBarProps {
  data: DataObject[];
}

const ArrivalsTimeBar: React.FC<ArrivalsTimeBarProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} stroke="#f3f6f4" />
        <XAxis 
          dataKey="month" 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: "#475467", fontSize: "12px", fontWeight: 500 }}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false}
          tick={{ fill: "#475467", fontSize: "12px", fontWeight: 500 }}
        >
          <Label
            value="Number of Buses"
            offset={0}
            angle={-90}
            position="insideLeft"
            style={{
              textAnchor: 'middle',
              color: '#475467',
              fontSize: '14px',
              fontWeight: 500,
            }}
          />
        </YAxis>
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
                    boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                    fontSize: "10px",
                    padding: "10px",
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom:"10px"}}>
                    <div style={{ width: "10px", height: "10px", backgroundColor: "#EAECF0", borderRadius: "50%", marginRight: '5px' }}></div>
                    <div className='flex gap-x-5'>
                    <span style={{ marginRight: 'auto', fontSize: '12px', fontWeight: '500' }}>
                      On-time arrivals (after 15 min):
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>
                      {payload[1].value}
                    </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: "10px", height: "10px", backgroundColor: "#B692F6", borderRadius: "50%", marginRight: '5px' }}></div>
                    <span style={{ marginRight: 'auto', fontSize: '12px', fontWeight: '500' }}>
                      Late arrivals (before 15 min):
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>
                      {payload[0].value}
                    </span>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar dataKey="lateArrivalsBusesCount" stackId="a" fill="#B692F6" barSize={20} />
        <Bar dataKey="onTimeArrivalsBusesCount" stackId="a" fill="#EAECF0" barSize={20} radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ArrivalsTimeBar;