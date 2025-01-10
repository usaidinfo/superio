import dynamic from "next/dynamic";
import Packages from "@/components/dashboard-pages/candidates-dashboard/packages";

export const metadata = {
  title: "Packages || CareeeBrrdgeridge - Job Borad React NextJS Template",
  description: "CareeeBrrdgeridge - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Packages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
