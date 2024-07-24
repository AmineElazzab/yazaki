import AttainmentTimeBar from "./attainment-line-chart.tsx";
import AttainmentPieChart from "./attainment-pie-chart.tsx";

type Props = {
    name: string;
    claims: {
        month: string;
        opened: number;
        closed: number;
        total: number;
    }[];
    categories: {
        name: string;
        value: number;
    }[];
};

export const    AttainmentComponent = ({ name, claims, categories }: Props) => {
    return (
        <div className="gap-6 rounded-2xl bg-white p-5 border border-[#EAECF0] shadow-sm">
            <div className="text-base font-semibold text-[#101828]">{name}</div>
            <div className=" my-5 border-b-[1.5px] border-[#f3f6f4]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <AttainmentTimeBar 
                        data={claims} 
                        strokeColor="#B692F6" 
                        fillColor="#B692F6"
                    />
                </div>
                <div className="md:col-span-1">
                    <AttainmentPieChart data={categories} />
                </div>
            </div>
        </div>
    );
};
