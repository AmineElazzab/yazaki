import ArrivalsTimeBar from "./on-time-arrivals-to-plant-bar-chart";

type Props = {
    name: string;
    description: string;
    data: {
        month: string;
        lateArrivalsBusesCount: number;
        onTimeArrivalsBusesCount: number;
    }[]
}
export const ArrivalsTimeToPlantComponent = ({name, description, data}: Props) => {
    return(
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-5 border border-[#EAECF0] shadow-sm h-80 justify-center">
                <div>
                <div className="flex gap-2 text-[#101828] items-center pl-4">
                    <p className="text-lg font-semibold">
                    {name}
                    </p>
                    <span className="font-normal text-sm">
                        (Before 15 min of shift start)
                    </span>
                </div>
            </div>
       <ArrivalsTimeBar data={data}/>
   </div>
)
}