import Phone from "../components/Phone";
import Gauge from "../components/Gauge";
import user1 from "./assets/user.jpeg";
import FooterNav from "../components/FooterNav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Phone>
      <div className="flex flex-col content-center h-[800px]">
        <div className="flex flex-row justify-between px-8 mt-4">
          <h1 className="font-gloock text-3xl font-black">Hi, Andre</h1>
          <div className="w-10 h-10">
            <img src={user1} alt="a user" className="rounded-full"></img>
          </div>
        </div>
        <Gauge></Gauge>
        <h2 className="text-center pt-3">
          You are currently scoring as{" "}
          <span className="font-bold">low risk</span>
        </h2>
        <section className="flex flex-col justify-center pt-12 px-8">
          <p className="mb-2 font-gloock">Quick look insights</p>
          <div className="w-full rounded-lg shadow h-1/2 bg-white px-2 text-sm boreder border-gray-200">
            <ul className="list-disc bg-[#FFFFF]  text-sm  p-4">
              <li>
                You spent one hour and 15 minutes less in the casino this week.
              </li>
              <li>
                Your spending is consistent and there are no significant
                changes.
              </li>
              <li>
                Your risk score has remained consistent for the past 2 months.
              </li>
            </ul>
          </div>
          <div className="pt-8 flex flex-col gap-2 w-full">
            <Link
              to="/report"
              className="w-full h-28 bg-[#DBF5F0] rounded-md flex justify-center items-center"
            >
              <p>View Report</p>
            </Link>
            <Link
              to="/survey"
              className="w-full h-28 bg-[#FFF5DA] rounded-md flex justify-center items-center"
            >
              <p>Submit Survey</p>
            </Link>
          </div>
        </section>
        <div className="mt-auto">
          <FooterNav></FooterNav>
        </div>
      </div>
    </Phone>
  );
}

export default Home;
