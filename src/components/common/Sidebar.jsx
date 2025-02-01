import { SIDEBAR_NAV_ITEMS } from "../../constants/data";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <motion.div
            // ${isSidebarOpen ? "w-72" : "w-28"}
            animate={{ width: isSidebarOpen ? 220 : 80 }}
            className={`relative z-10 transition-all duration-300 ease-in-out shrink-0`}
        >
            <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>

                <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className='p-2 ml-1 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
                >
                    <Menu size={24} />
                </motion.button>


                <nav className='mt-4 grow space-y-2'>
                    {
                        SIDEBAR_NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                className={({ isActive }) => `flex items-center pl-3 py-3 text-sm border font-medium rounded-lg hover:bg-slate-700 duration-300 transition-colors 
                                ${isActive ? "bg-slate-700 border-slate-600" : "border-transparent"}`}
                            >
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />

                                <AnimatePresence>
                                    {
                                        isSidebarOpen && (
                                            <motion.span
                                                className='ml-4 whitespace-nowrap'
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2, delay: 0.3 }}
                                            >
                                                {item.name}
                                            </motion.span>
                                        )
                                    }
                                </AnimatePresence>
                            </NavLink>
                        ))
                    }
                </nav>
            </div>
        </motion.div>
    );
}

export default Sidebar;