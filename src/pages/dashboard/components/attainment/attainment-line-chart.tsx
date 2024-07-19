import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 0, left: 10, bottom: 0 }}
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
          />
          <YAxis axisLine={false} tickLine={false} 
                      tick={{ fill: "#475467", fontSize: "12px", fontWeight: 500 }}

          > 
            <Label
              value="Number of claims"
              offset={0}
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle", color: "#475467", fontSize: "14px", fontWeight: 500 }}
            />
            </YAxis>
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: "#B692F6",
              border: "none",
              borderRadius: "5px",
              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              fontSize: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "5px",
              paddingBottom: "3px",
            }}
            labelStyle={{
              color: "#fff",
              fontSize: "8px",
              lineHeight: "8px",
              fontWeight: 300,
            }}
            itemStyle={{
              color: "#fff",
              fontSize: "8px",
              lineHeight: "8px",
              fontWeight: 500,
            }}
            wrapperStyle={{
              border: "none",
              borderRadius: "0",
              boxShadow: "none",
              color: "#B5B5BB",
              fontSize: "10px",
              padding: "0",
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
