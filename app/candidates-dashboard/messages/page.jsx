import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/candidates-dashboard/messages";

export const metadata = {
  title: "Messages || CareeeBrrdgeridge - Job Borad React NextJS Template",
  description: "CareeeBrrdgeridge - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
