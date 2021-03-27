import React from "react";
import { Button, notification, Row } from "antd";

const notificationData = {
    message: "Notification Title",
    description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
};

export const Test: React.FC = () => {
    const successNotification = () => {
        notification.success(notificationData);
    };
    const errorNotification = () => {
        notification.error(notificationData);
    };
    const warningNotification = () => {
        notification.warning(notificationData);
    };
    const infoNotification = () => {
        notification.info(notificationData);
    };
    return (
        <>
            <Row style={{ margin: 10 }}>
                <Button type="primary" onClick={successNotification}>
                    Open success notification box
                </Button>
            </Row>
            <Row style={{ margin: 10 }}>
                <Button type="primary" onClick={errorNotification}>
                    Open error notification box
                </Button>
            </Row>
            <Row style={{ margin: 10 }}>
                <Button type="primary" onClick={warningNotification}>
                    Open warrning notification box
                </Button>
            </Row>
            <Row style={{ margin: 10 }}>
                <Button type="primary" onClick={infoNotification}>
                    Open info notification box
                </Button>
            </Row>
        </>
    );
};
