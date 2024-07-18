import KpiAverageLineChartComponent from "./kpi-average-line-chart";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";


type Props = {
  name: string;
  value: number;
  detailsKpi: {count: number}[];
  versusLastMonthPercentage: number;
};

const KpiAverageComponent = ({
  name,
  value,
  detailsKpi,
  versusLastMonthPercentage,
}: Props) => {
  const chartColor = versusLastMonthPercentage < 0 ? "#FF0000" : "#01B574";

  const formattedPercentage = versusLastMonthPercentage < 0
    ? `${Math.abs(versusLastMonthPercentage)} %`
    : `${versusLastMonthPercentage} %`;

  const IconComponent = versusLastMonthPercentage < 0 ? FaArrowTrendDown : FaArrowTrendUp;

  const percentageStyle = {
    color: chartColor,
  };

  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-5 border border-[#EAECF0] shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold text-[#101828]">{name}</div>
        <div className="flex items-center">
        </div>
      </div>
      <div className="flex w-[100%]">
        <div className="flex w-[60%] flex-col gap-y-6">
          <span className="text-3xl font-semibold">{value}</span>
          <div className="flex gap-1 text-sm font-medium items-center">
          <IconComponent size={18} color={chartColor} />
            <span style={percentageStyle}>{formattedPercentage}</span> 
            <span className="text-xs text-gray-600">vs last month</span>
          </div>
        </div>
        <div className="flex items-end justify-end md:w-full :w-[40%]">
          <KpiAverageLineChartComponent
            strokeColor={chartColor}
            data={detailsKpi}
          />
        </div>
      </div>
    </div>
  );
};

export default KpiAverageComponent;
