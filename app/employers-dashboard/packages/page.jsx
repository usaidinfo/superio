import dynamic from "next/dynamic";
import Packages from "@/components/dashboard-pages/employers-dashboard/packages";

export const metadata = {
  title: "Packages || CareerBridgeridge - Job Borad React NextJS Template",
  description: "CareerBridgeridge - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Packages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
