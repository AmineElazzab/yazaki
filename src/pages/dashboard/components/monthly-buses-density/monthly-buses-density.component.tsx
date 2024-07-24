import MonthlyBusesDensityBar from "./monthly-buses-density-bar-chart";

type Props = {
  name: string;
  averageDensity: number;
  data: {
    month: number;
    pickup: number;
    dropOff: number;
  }[];
};

export const MonthlyBusesDensityComponent = ({ name, data }: Props) => {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white py-5 pr-5 pl-2 border border-[#EAECF0] shadow-sm h-80">
      <div className="text-lg font-semibold text-[#101828] ml-3">{name}</div>
      <MonthlyBusesDensityBar data={data} />
    </div>
  );
};
