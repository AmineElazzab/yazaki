import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface DataObject {
    name: string;
    value: number;
}

interface AttainmentPieChartProps {
    data: DataObject[];
}

const COLORS = ['#7F56D9', '#9E77ED', '#B692F6', '#D6BBFB', '#E9D7FE', '#EAECF0'];

const AttainmentPieChart : React.FC<AttainmentPieChartProps> = ({ data }) => {
    const getInnerRadius = (width: number) => {
        if (width >= 1074) { 
            return 80;
        } else if (width >= 480) {
            return 60;
        } else {
            return 40;
        }
    };

    const getOuterRadius = (width: number) => {
        if (width >= 1074) {
            return 150;
        } else if (width >= 480) {
            return 110;
        } else {
            return 90;  
        }
    };

    const getColor = (name: string) => {
        const index = data.findIndex(item => item.name === name);
        return COLORS[index % COLORS.length];
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={getInnerRadius(window.innerWidth)}
                    outerRadius={getOuterRadius(window.innerWidth)}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip
                    cursor={false}
                    content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            const { name, value } = payload[0].payload;
                            return (
                                <div className="bg-white p-2 rounded-lg shadow-sm flex items-center">
                                    <div style={{ width: "10px", height: "10px", backgroundColor: getColor(name), borderRadius: "50%", marginRight: '5px' }}></div>
                                    <div className='flex gap-x-5 '>
                                        <span className='font-medium text-[10px]'>{name}:</span>
                                        <span className='font-medium text-[10px]'>{value}</span>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default AttainmentPieChart;
