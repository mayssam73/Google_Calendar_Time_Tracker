import DoughnutChart from '../components/DoughnutChart';

export default function Dashboard() {
    return (
        <div className="flex">
        <div className="flex-auto w-[25%]">
          <div>Google Calendar</div>
        </div>
        <div className="h-screen w-px bg-gray-200 border-0 darkBg-gray-700"></div>
        <div className="flex-auto w-[75%]">
          <div>Hello</div>
          <hr className="h-px my-[10%] bg-gray-200 border-0 darkBg-gray-700"></hr>
          <div className="flex-auto w-14">
            <div>Hi</div>
            <DoughnutChart />
          </div>
        </div>
      </div>
    );
  }