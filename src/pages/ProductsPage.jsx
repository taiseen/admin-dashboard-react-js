import ChartCategoryDistribution from "../components/overview/ChartCategoryDistribution";
import ChartSalesTrend from "../components/products/ChartSalesTrend";
import ProductsTable from "../components/products/ProductsTable";
import TopCart from "../components/common/TopCart";
import { productsPageTopCart } from "../constants/pageTopCart";
import { motion } from "framer-motion";


const ProductsPage = () => {

    return (
        <div className='h-full relative overflow-auto customScrollbar z-10 pb-16'>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {productsPageTopCart.map((obj) => <TopCart key={obj.name} obj={obj} />)}
                </motion.div>


                <ProductsTable />


                {/* CHARTS */}
                <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
                    <ChartSalesTrend />
                    <ChartCategoryDistribution />
                </div>

            </main>
        </div>
    )
}

export default ProductsPage