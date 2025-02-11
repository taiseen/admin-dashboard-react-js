import ConnectedAccounts from "../components/settings/ConnectedAccounts"
import Notifications from "../components/settings/Notifications"
import DangerZone from "../components/settings/DangerZone"
import Security from "../components/settings/Security"
import Profile from "../components/settings/Profile"

const SettingsPage = () => {

    return (
        <div className='h-full relative overflow-auto customScrollbar z-10 pb-16'>

            <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
                <Profile />
                <Notifications />
                <Security />
                <ConnectedAccounts />
                <DangerZone />
            </main>

        </div>
    )
}

export default SettingsPage