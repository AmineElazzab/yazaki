import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DataObject {
    name: string;
    value: number;
}

interface AttainmentPieChartProps {
    data: DataObject[];
}

const COLORS = ['#7F56D9', '#9E77ED', '#B692F6', '#D6BBFB', '#E9D7FE', '#EAECF0'];

export default class AttainmentPieChart extends PureComponent<AttainmentPieChartProps> {

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={this.props.data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {this.props.data.map((entry, index) => (
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
}
