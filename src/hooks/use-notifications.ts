import { useEffect } from "react";
import { isAuthorized } from "services/helpers/user/authorize";
import { Modal } from "antd";

export const useNotifications = (): void => {
    useEffect(() => {
        if (isAuthorized()) {
            console.log("Fetch notifications");
            Modal.confirm({
                title: "New notification",
                content: "New notification",
                onOk: () => console.log("Read notification"),
                onCancel: () => console.log("Cancel notification"),
            });
        }
    }, []);
};
