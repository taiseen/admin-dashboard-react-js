import ChartUserDemographics from "../components/users/ChartUserDemographics";
import ChartUserActivity from "../components/users/ChartUserActivity";
import ChartUserGrowth from "../components/users/ChartUserGrowth";
import UsersTable from "../components/users/UsersTable";
import TopCart from "../components/common/TopCart";
import { usersPageTopCart } from "../constants/pageTopCart";
import { motion } from "framer-motion";

const UsersPage = () => {

    return (
        <div className='h-full relative overflow-auto customScrollbar z-10 pb-16'>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {usersPageTopCart.map((stat, index) => (
                        <TopCart key={index} obj={stat} />
                    ))}
                </motion.div>

                <UsersTable />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
                    <ChartUserGrowth />
                    <ChartUserActivity />
                    <ChartUserDemographics />
                </div>
            </main>
        </div>
    );
}

export default UsersPage;
