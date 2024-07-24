import C02 from "../../assets/C02.svg";
import Deviation from "../../assets/Deviation.svg";
import Station from "../../assets/Station.svg";
import { AttainmentComponent } from "./components/attainment/attainment.component.tsx";
import { Co2EmissionsKpiComponent } from "./components/co2-emissions-kpi/co2EmissionsKpi.component.tsx";
import KpiAverageComponent from "./components/kpi-average/kpi-average.component.tsx";
import { KpiBlockComponent } from "./components/kpi-block/index.ts";
import { MonthlyBusesDensityComponent } from "./components/monthly-buses-density/index.ts";
import { ArrivalsTimeToPlantComponent } from "./components/on-time-arrivals-to-plant/on-time-arrivals-to-plant.component.tsx";

export function DashboardPage() {
  return (
    <div className="flex flex-col h-full gap-5 bg-[#F9FAFB] p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <KpiAverageComponent
          name="Average buses in operation"
          value={103}
          detailsKpi={[
            { count: 199, month: "Jan" },
            { count: 300, month: "Feb" },
            { count: 200, month: "Mar" },
            { count: 278, month: "Apr" },
            { count: 189, month: "May" },
            { count: 239, month: "Jun" },
            { count: 349, month: "Jul" },
            { count: 278, month: "Aug" },
            { count: 400, month: "Sep" },
            { count: 300, month: "Oct" },
            { count: 200, month: "Nov" },
            { count: 278, month: "Dec" },
          ]}
          versusLastMonthPercentage={100}
        />
        <KpiAverageComponent
          name="Average buses density"
          value={16}
          detailsKpi={
            [
            { count: 199, month: "Jan" },
            { count: 300, month: "Feb" },
            { count: 200, month: "Mar" },
            { count: 278, month: "Apr" },
            { count: 189, month: "May" },
            { count: 239, month: "Jun" },
            { count: 349, month: "Jul" },
            { count: 278, month: "Aug" },
            { count: 400, month: "Sep" },
            { count: 300, month: "Oct" },
            { count: 200, month: "Nov" },
            { count: 278, month: "Dec" },
            ]}
          versusLastMonthPercentage={70}
        />
        <KpiAverageComponent
          name="Excessive speeding"
          value={4}
          detailsKpi={[
            { count: 199, month: "Jan" },
            { count: 300, month: "Feb" },
            { count: 200, month: "Mar" },
            { count: 278, month: "Apr" },
            { count: 189, month: "May" },
            { count: 239, month: "Jun" },
            { count: 349, month: "Jul" },
            { count: 278, month: "Aug" },
            { count: 400, month: "Sep" },
            { count: 300, month: "Oct" },
            { count: 200, month: "Nov" },
            { count: 278, month: "Dec" },
          ]}
          versusLastMonthPercentage={-35}
        />
        <KpiAverageComponent
          name="Excessive speeding"
          value={4}
          detailsKpi={[
            { count: 199, month: "Jan" },
            { count: 300, month: "Feb" },
            { count: 200, month: "Mar" },
            { count: 278, month: "Apr" },
            { count: 189, month: "May" },
            { count: 239, month: "Jun" },
            { count: 349, month: "Jul" },
            { count: 278, month: "Aug" },
            { count: 400, month: "Sep" },
            { count: 300, month: "Oct" },
            { count: 200, month: "Nov" },
            { count: 278, month: "Dec" },
          ]}
          versusLastMonthPercentage={-35}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto gap-5">
        <MonthlyBusesDensityComponent
          name="Monthly bus density"
          averageDensity={95}
          data={[
            { month: 1, pickup: 10, dropOff: 80 },
            { month: 2, pickup: 90, dropOff: 70 },
            { month: 3, pickup: 70, dropOff: 60 },
            { month: 4, pickup: 20, dropOff: 30 },
            { month: 5, pickup: 40, dropOff: 50 },
            { month: 6, pickup: 60, dropOff: 40 },
            { month: 7, pickup: 80, dropOff: 20 },
            { month: 8, pickup: 100, dropOff: 50 },
            { month: 9, pickup: 90, dropOff: 10 },
            { month: 10, pickup: 80, dropOff: 20 },
            { month: 11, pickup: 70, dropOff: 30 },
            { month: 12, pickup: 60, dropOff: 40 },
          ]}
        />
        <ArrivalsTimeToPlantComponent
          name="On-time arrivals to plant"
          description="Before 15 min of shift start"
          data={[
            { month: "01", lateArrivalsBusesCount: 580, onTimeArrivalsBusesCount: 210 },
            { month: "02", lateArrivalsBusesCount: 570, onTimeArrivalsBusesCount: 220 },
            { month: "03", lateArrivalsBusesCount: 560, onTimeArrivalsBusesCount: 230 },
            { month: "04", lateArrivalsBusesCount: 550, onTimeArrivalsBusesCount: 240 },
            { month: "05", lateArrivalsBusesCount: 540, onTimeArrivalsBusesCount: 250 },
            { month: "06", lateArrivalsBusesCount: 530, onTimeArrivalsBusesCount: 260 },
            { month: "07", lateArrivalsBusesCount: 520, onTimeArrivalsBusesCount: 270 },
            { month: "08", lateArrivalsBusesCount: 510, onTimeArrivalsBusesCount: 280 },
            { month: "09", lateArrivalsBusesCount: 500, onTimeArrivalsBusesCount: 290 },
            { month: "10", lateArrivalsBusesCount: 490, onTimeArrivalsBusesCount: 300 },
            { month: "11", lateArrivalsBusesCount: 480, onTimeArrivalsBusesCount: 310 },
            { month: "12", lateArrivalsBusesCount: 470, onTimeArrivalsBusesCount: 320 },
          ]}
        />
      </div>
      <AttainmentComponent
        name="Attainment (monthly evolution %)"
        categories={[
          { name: "Opened", value: 60 },
          { name: "Closed", value: 40 },
        ]}
        claims={[
          { month: "Jan", opened: 100, closed: 80 , total: 180},
          { month: "Feb", opened: 60, closed: 100 , total: 160},
          { month: "Mar", opened: 80, closed: 60 , total: 140},
          { month: "Apr", opened: 90, closed: 70 , total: 160},
          { month: "May", opened: 70, closed: 90 , total: 160},
          { month: "Jun", opened: 80, closed: 60 , total: 140},
          { month: "Jul", opened: 90, closed: 70 , total: 160},
          { month: "Aug", opened: 100, closed: 80 , total: 180},
          { month: "Sep", opened: 60, closed: 100 , total: 160},
          { month: "Oct", opened: 80, closed: 60 , total: 140},
          { month: "Nov", opened: 90, closed: 70 , total: 160},
          { month: "Dec", opened: 70, closed: 90 , total: 160},
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 lg:gap-x-5 md:gap-x-5">
      <div className="grid grid-rows-1 md:grid-rows-2 gap-5 col-span-1">
      <KpiBlockComponent
          name="Non respect of pickup station"
          value={10}
          imagePath={Station}
        />
        <KpiBlockComponent
          name="Deviation route"
          value={2}
          imagePath={Deviation}
        />
      </div>
      <div className="col-span-2">
      <Co2EmissionsKpiComponent
        averageCo2Emissions={223}
        totalCo2Emissions={40}
        name="CO2 Emissions Overview"
        imagePath={C02}
      />
      </div>
      </div>
    </div>
  );
}
