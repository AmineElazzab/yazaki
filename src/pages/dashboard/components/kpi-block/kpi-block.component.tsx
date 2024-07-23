type Props = {
    name: string;
    value: number;
    imagePath: any;
}
export const KpiBlockComponent = ({name, value, imagePath}: Props) => {
    return (
        <div className="flex flex-col gap-2 justify-between rounded-2xl bg-white p-5 border border-[#EAECF0] shadow-md">
            <div className="flex items-center gap-2">
                <p className="text-md font-medium text-[#101828]">{name}</p>
            </div>
            <div className="flex items-center justify-between gap-2">
                <img src={imagePath} alt="icon" />
                <p className="text-3xl font-semibold">{value}</p>
            </div>
        </div>

    )
}