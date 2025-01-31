import { Outlet } from "react-router-dom";
import Sidebar from "./common/Sidebar";
import Background from "./Background";
import Header from "./common/Header";


const Layout = () => {

    return (
        <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>

            <Background />
            <Sidebar />

            <div className="flex-1 rounded-lg">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout