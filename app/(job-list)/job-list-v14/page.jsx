import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v14";

export const metadata = {
  title: "Job List V14 || CareeeBrrdgeridge - Job Borad React NextJS Template",
  description: "CareeeBrrdgeridge - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
