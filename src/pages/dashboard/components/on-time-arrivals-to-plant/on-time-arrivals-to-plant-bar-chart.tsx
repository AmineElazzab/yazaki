import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';


interface DataObject {
    month: string;
    lateArrivalsBusesCount: number;
    onTimeArrivalsBusesCount: number;
  }

interface ArrivalsTimeBarProps {
    data: DataObject[];
    }
export default class ArrivalsTimeBar extends PureComponent<ArrivalsTimeBarProps> {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid 
            vertical={false} 
            stroke="#f3f6f4"
          />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis  axisLine={false} tickLine={false} >
              <Label
                value="Number of Buses"
                offset={0}
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle", color: "#475467", fontSize: "14px", fontWeight: 500 }}
              />
            </YAxis>
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
          <Bar dataKey="lateArrivalsBusesCount" stackId="a" fill="#B692F6" barSize={20} />
          <Bar dataKey="onTimeArrivalsBusesCount" stackId="a" fill="#EAECF0" barSize={20} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
