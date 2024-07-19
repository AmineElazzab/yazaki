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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <KpiAverageComponent
          name="Average buses in operation"
          value={103}
          detailsKpi={[
            { count: 400 },
            { count: 300 },
            { count: 200 },
            { count: 278 },
            { count: 189 },
            { count: 239 },
            { count: 349 },
            { count: 278 },
            { count: 400 },
            { count: 300 },
            { count: 200 },
            { count: 278 },
          ]}
          versusLastMonthPercentage={100}
        />
        <KpiAverageComponent
          name="Average buses density"
          value={16}
          detailsKpi={
            [
              { count: 400 },
              { count: 300 },
              { count: 200 },
              { count: 278 },
              { count: 189 },
              { count: 239 },
              { count: 349 },
              { count: 278 },
              { count: 400 },
              { count: 300 },
              { count: 200 },
              { count: 278 },
            ]
          
          }
          versusLastMonthPercentage={70}
        />
        <KpiAverageComponent
          name="Excessive speeding"
          value={4}
          detailsKpi={[
            { count: 400 },
            { count: 300 },
            { count: 200 },
            { count: 278 },
            { count: 189 },
            { count: 239 },
            { count: 349 },
            { count: 278 },
            { count: 400 },
            { count: 300 },
            { count: 200 },
            { count: 278 },
          ]}
          versusLastMonthPercentage={-35}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-96 gap-5">
        <MonthlyBusesDensityComponent
          name="Monthly bus density"
          averageDensity={95}
          data={[
            { month: "01", pickup: 78, dropOff: 90 },
            { month: "02", pickup: 70, dropOff: 60 },
            { month: "03", pickup: 80, dropOff: 70 },
            { month: "04", pickup: 90, dropOff: 80 },
            { month: "05", pickup: 100, dropOff: 90 },
            { month: "06", pickup: 110, dropOff: 100 },
            { month: "07", pickup: 120, dropOff: 110 },
            { month: "08", pickup: 130, dropOff: 120 },
            { month: "09", pickup: 140, dropOff: 130 },
            { month: "10", pickup: 150, dropOff: 140 },
            { month: "11", pickup: 160, dropOff: 150 },
            { month: "12", pickup: 170, dropOff: 160 },
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
          { month: "Jan", opened: 100, closed: 80 },
          { month: "Feb", opened: 90, closed: 70 },
          { month: "Mar", opened: 80, closed: 60 },
          { month: "Apr", opened: 70, closed: 50 },
          { month: "May", opened: 60, closed: 40 },
          { month: "Jun", opened: 50, closed: 30 },
          { month: "Jul", opened: 40, closed: 20 },
          { month: "Aug", opened: 30, closed: 10 },
          { month: "Sep", opened: 20, closed: 0 },
          { month: "Oct", opened: 10, closed: 0 },
          { month: "Nov", opened: 0, closed: 0 },
          { month: "Dec", opened: 0, closed: 0 },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 lg:gap-x-5">
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
