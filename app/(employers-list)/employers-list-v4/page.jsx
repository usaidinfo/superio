import dynamic from "next/dynamic";
import EmployersList from "@/components/employers-listing-pages/employers-list-v4";

export const metadata = {
  title: "Employers List V4 || CareerBridge - Job Borad React NextJS Template",
  description: "CareerBridge - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <EmployersList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
