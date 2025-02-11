import SettingLayout from "./SettingLayout"
import { User } from "lucide-react";

const Profile = () => {
    return (
        <SettingLayout icon={User} title={"Profile"}>

            <div className='flex flex-col sm:flex-row items-center mb-6'>
                <img
                    alt='Profile'
                    src='https://randomuser.me/api/portraits/men/15.jpg'
                    className='rounded-full w-20 h-20 object-cover mr-4'
                />

                <div>
                    <h3 className='text-lg font-semibold text-gray-100'>John Doe</h3>
                    <p className='text-gray-400'>john.doe@example.com</p>
                </div>
            </div>

            <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto cursor-pointer'>
                Edit Profile
            </button>

        </SettingLayout>
    )
}

export default Profile;