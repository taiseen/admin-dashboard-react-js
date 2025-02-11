import SettingLayout from "./SettingLayout";
import ToggleSwitch from "./ToggleSwitch";
import { Lock } from "lucide-react";
import { useState } from "react";

const Security = () => {
    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <SettingLayout icon={Lock} title={"Security"}>
            <ToggleSwitch
                label={"Two-Factor Authentication"}
                isOn={twoFactor}
                onToggle={() => setTwoFactor(!twoFactor)}
            />

            <div className='mt-4'>
                <button
                    className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200 cursor-pointer'>
                    Change Password
                </button>
            </div>
        </SettingLayout>
    );
};

export default Security;