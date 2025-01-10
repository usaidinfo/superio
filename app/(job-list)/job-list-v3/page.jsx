import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v3";

export const metadata = {
  title: "Job List V3 || CareerBridgeridge - Job Borad React NextJS Template",
  description: "CareerBridgeridge - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
