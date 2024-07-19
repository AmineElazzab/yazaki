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
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                        background: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                        fontSize: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "5px",
                        paddingBottom: "3px",
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default AttainmentPieChart;
