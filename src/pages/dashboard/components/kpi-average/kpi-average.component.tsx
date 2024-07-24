import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import KpiAverageLineChartComponent from "./kpi-average-line-chart";

type Props = {
  name: string;
  value: number;
  detailsKpi: {
    count: number;
    month: string;
  }[];
  versusLastMonthPercentage: number;
};

const KpiAverageComponent = ({
  name,
  value,
  detailsKpi,
  versusLastMonthPercentage,
}: Props) => {
  const chartColor = versusLastMonthPercentage < 0 ? "#D92D20" : "#079455";

  const formattedPercentage = versusLastMonthPercentage < 0
    ? `${Math.abs(versusLastMonthPercentage)} %`
    : `${versusLastMonthPercentage} %`;

  const IconComponent = versusLastMonthPercentage < 0 ? FaArrowTrendDown : FaArrowTrendUp;

  const percentageStyle = {
    color: chartColor,
  };
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-4 border border-[#EAECF0] shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-sm lg:text-base sm:text-[12px] font-semibold text-[#101828]">{name}</div>
        <div className="flex items-center"></div>
      </div>
      <div className="grid lg:flex w-[100%] gap-3">
        <div className="flex flex-col gap-y-6  ">
          <span className="text-3xl font-semibold">{value}</span>
          <div className="flex gap-1 text-[10px] font-medium items-center justify-start text-nowrap">
            <IconComponent color={chartColor} />
            <span style={percentageStyle} className="text-[10px]">{formattedPercentage}</span>
            <span className="text-[10px] text-gray-600">vs last month</span>
          </div>
        </div>
        <div className="flex items-end justify-end w-full">
          <KpiAverageLineChartComponent strokeColor={chartColor} data={detailsKpi} />
        </div>
      </div>
    </div>
  );
};

export default KpiAverageComponent;
