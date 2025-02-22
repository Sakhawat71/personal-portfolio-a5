import { getServerSession } from "next-auth";

const DashboardPage = async () => {

    const session = await getServerSession();
    console.log(session);

    return (
        <div>
            <p>{session?.user?.name}</p>
        </div>
    );
};

export default DashboardPage;