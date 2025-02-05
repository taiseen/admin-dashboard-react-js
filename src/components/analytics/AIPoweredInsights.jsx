import { analyticsInsights } from "../../constants/pageTopCart";
import { motion } from "framer-motion";

const AIPoweredInsights = () => {

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>

            <div className='space-y-4'>
                {analyticsInsights.map((obj, index) => (
                    <div key={index} className='flex items-center space-x-3'>
                        <div className={`p-2 rounded-full ${obj.color} bg-opacity-20`}>
                            <obj.icon className={`size-6 ${obj.color}`} />
                        </div>

                        <p className='text-gray-300'>{obj.insight}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default AIPoweredInsights;