import { SIDEBAR_NAV_ITEMS } from "../../constants/data";
import { useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    const title = SIDEBAR_NAV_ITEMS.find((item) => item.href === location.pathname).name;

    return (
        <header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 h-16 w-full'>
            <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
            </div>
        </header>
    );
};

export default Header;