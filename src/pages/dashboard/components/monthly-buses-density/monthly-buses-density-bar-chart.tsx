import React, { PureComponent } from "react";
import {
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

interface DataObject {
  month: string;
  pickup: number;
  dropOff: number;
}

interface MonthlyBusesDensityBarProps {
  data: DataObject[];
}

const CustomLabel = ({ x, y, value }: { x: number; y: number; value: string }) => (
  <g transform={`translate(${x},${y})`}>
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="1" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.1" />
      </filter>
    </defs>
    <rect x="-25" y="-12" rx="12" ry="12" width="50" height="24" fill="#fff" filter="url(#shadow)" />
    <text x="0" y="0" textAnchor="middle" alignmentBaseline="middle" fill="#000" fontSize="12px">
      {value}
    </text>
  </g>
);

export default class MonthlyBusesDensityBar extends PureComponent<MonthlyBusesDensityBarProps> {
  private chartContainer: HTMLDivElement | null = null; 

  state = {
    chartWidth: 0, 
    chartHeight: 0,
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    if (this.chartContainer) {
      const chartWidth = this.chartContainer.offsetWidth;
      this.setState({ chartWidth });
    }
  };

  updateDimensionsHeight = () => {
    if (this.chartContainer) {
      const chartHeight = this.chartContainer.offsetHeight;
      this.setState({ chartHeight });
    }
  }

  render() {
    const { data } = this.props;
    const { chartWidth } = this.state;
    const {chartHeight} =  this.state;
    const maxPickup = Math.max(...data.map((entry) => entry.pickup));
    const yPosition = maxPickup * 0.95;

    const labelX = chartWidth - 20; 
    const labelY = chartHeight + 30;

    return (
      <div ref={(el) => (this.chartContainer = el)} style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barGap={0}
          >
            <XAxis dataKey="month" axisLine={false} tickLine={false} />

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
            <Bar dataKey="pickup" fill="#B692F6" barSize={10} radius={[10, 10, 0, 0]} />
            <Bar dataKey="dropOff" fill="#EAECF0" barSize={10} radius={[10, 10, 0, 0]} />
            <ReferenceLine
              y={yPosition}
              stroke="#94DDBC"
              strokeWidth={1}
              label={<CustomLabel value="95%" x={labelX} y={labelY} />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
