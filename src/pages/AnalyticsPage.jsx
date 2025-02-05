import ChartCustomerSegmentation from "../components/analytics/ChartCustomerSegmentation"
import ChartChannelPerformance from "../components/analytics/ChartChannelPerformance"
import ChartProductPerformance from "../components/analytics/ChartProductPerformance"
import ChartUserRetention from "../components/analytics/ChartUserRetention"
import AIPoweredInsights from "../components/analytics/AIPoweredInsights"
import OverviewCards from "../components/analytics/OverviewCards"
import ChartRevenue from "../components/analytics/ChartRevenue"


const AnalyticsPage = () => {

    return (
        <div className='h-full relative overflow-auto customScrollbar z-10 pb-16'>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <OverviewCards />

                <ChartRevenue />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <ChartUserRetention />
                    <ChartChannelPerformance />
                    <ChartProductPerformance />
                    <ChartCustomerSegmentation />
                </div>

                <AIPoweredInsights />
            </main>
        </div>
    )
}

export default AnalyticsPage