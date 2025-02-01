import ChartCategoryDistribution from "../components/overview/ChartCategoryDistribution";
import ChartSalesOverview from "../components/overview/ChartSalesOverview";
import ChartSalesChannel from "../components/overview/ChartSalesChannel";
import TopCart from "../components/common/TopCart";
import { overviewPageTopCart } from "../constants/pageTopCart";
import { motion } from "framer-motion";


const OverviewPage = () => {
    
    return (
        <div className='h-full relative overflow-auto customScrollbar z-10 pb-16'>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {overviewPageTopCart.map((obj) => <TopCart key={obj.name} obj={obj} />)}
                </motion.div>


                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <ChartSalesOverview />
                    <ChartCategoryDistribution />
                    <ChartSalesChannel />
                </div>

            </main>
        </div>
    )
}

export default OverviewPage