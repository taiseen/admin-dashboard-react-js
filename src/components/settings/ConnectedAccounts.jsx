import { Facebook, HelpCircle, Linkedin, Plus, Twitter } from "lucide-react";
import { useState } from "react";
import SettingLayout from "./SettingLayout";

const ConnectedAccounts = () => {

    const [connectedAccounts, setConnectedAccounts] = useState([
        {
            id: 1,
            name: "Linkedin",
            connected: true,
            icon: Linkedin,
        },
        {
            id: 2,
            name: "Facebook",
            connected: false,
            icon: Facebook,
        },
        {
            id: 3,
            name: "Twitter",
            connected: true,
            icon: Twitter,
        },
    ]);

    const handleConnectAccount = (account) => {
        setConnectedAccounts(
            connectedAccounts.map((acc) => {
                if (acc.id === account.id) {
                    return { ...acc, connected: !acc.connected };
                }
                return acc;
            })
        );
    }

    return (
        <SettingLayout icon={HelpCircle} title={"Connected Accounts"}>

            {connectedAccounts.map((account) => (
                <div key={account.id} className='flex items-center justify-between py-3'>
                    <div className='flex gap-1'>
                        {/* <img
                            alt='Social img'
                            src={account.icon}
                            className='size-6 object-cover rounded-full mr-2'
                        /> */}

                        <account.icon className='size-6 object-cover mr-2 text-slate-400' />
                        <span className='text-gray-300'>{account.name}</span>
                    </div>

                    <button
                        onClick={() => handleConnectAccount(account)}
                        className={`px-3 py-1 rounded transition duration-300 cursor-pointer
                            ${account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"}`}
                    >
                        {account.connected ? "Connected" : "Connect"}
                    </button>
                </div>
            ))}

            <button
                className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'
            >
                <Plus size={18} className='mr-2' /> Add Account
            </button>

        </SettingLayout>
    );
};

export default ConnectedAccounts;