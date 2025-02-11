import SettingLayout from "./SettingLayout";
import ToggleSwitch from "./ToggleSwitch";
import { Bell } from "lucide-react";
import { useState } from "react";

const Notifications = () => {
    const [notifications, setNotifications] = useState({
        push: true,
        email: false,
        sms: true,
    });

    return (
        <SettingLayout icon={Bell} title={"Notifications"}>
            <ToggleSwitch
                label={"Push Notifications"}
                isOn={notifications.push}
                onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}
            />

            <ToggleSwitch
                label={"Email Notifications"}
                isOn={notifications.email}
                onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
            />

            <ToggleSwitch
                label={"SMS Notifications"}
                isOn={notifications.sms}
                onToggle={() => setNotifications({ ...notifications, sms: !notifications.sms })}
            />
        </SettingLayout>
    );
};

export default Notifications;