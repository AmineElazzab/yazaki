import { FaArrowTrendDown } from "react-icons/fa6";

type Props = {
    totalCo2Emissions: number;
    averageCo2Emissions: number;
    name: string;
    imagePath: any;
}

export const Co2EmissionsKpiComponent = ({ name, imagePath, totalCo2Emissions, averageCo2Emissions }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl bg-white p-5 border border-[#EAECF0] shadow-md text-[#101828] ">
            <div className="md:col-span-1">
                <p className="text-lg font-semibold text-[#101828]">{name}</p>
                <div className="flex items-center justify-between gap-2 mt-2">
                    <img src={imagePath} alt="icon" />
                </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
                <div className="rounded-2xl bg-white p-5 border border-[#EAECF0] shadow-sm">
                    <div className="flex items-end">
                        <p className="text-3xl font-semibold">{totalCo2Emissions}</p>
                        <span className="font-semibold">TCO2</span>
                    </div>
                    <p className="text-sm font-medium mt-2">Total CO2 emissions</p>
                </div>
                <div className="rounded-2xl bg-white p-5 border border-[#EAECF0] shadow-sm">
                    <div className="flex items-end">
                        <p className="text-3xl font-semibold">{averageCo2Emissions}</p>
                        <span className="font-semibold">g</span>
                    </div>
                    <p className="text-sm font-medium mt-2">Average CO2 emissions</p>
                </div>
                <div className="rounded-2xl bg-white p-5 border border-[#EAECF0] shadow-sm md:col-span-2">
                    <div className="flex gap-3">
              <FaArrowTrendDown color="#079455" />
                    <p className="text-sm font-medium text-[#101828]">Carbon Footprint Reduction</p>
                    </div>
                    <p className="text-sm ml-7 w-[50%] text-gray-700 font-normal">
                        Achieved through transportation service improvements
                    </p>
                </div>
            </div>
        </div>
    );
};
