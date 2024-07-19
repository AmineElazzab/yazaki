import MonthlyBusesDensityBar from "./monthly-buses-density-bar-chart";

type Props = {
  name: string;
  averageDensity: number;
  data: {
    month: string;
    pickup: number;
    dropOff: number;
  }[];
};

export const MonthlyBusesDensityComponent = ({ name, data }: Props) => {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white py-5 pr-5 pl-2 border border-[#EAECF0] shadow-md">
      <div className="text-base font-semibold text-[#101828]">{name}</div>
      <MonthlyBusesDensityBar data={data} />
    </div>
  );
};
