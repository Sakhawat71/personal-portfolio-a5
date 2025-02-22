import DashboardClient from "@/components/Dashboard/Dashboard";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <div className="text-center mt-10 text-red-500">Unauthorized Access</div>;
    }

    return <DashboardClient user={session.user} />;
};

export default DashboardPage;
