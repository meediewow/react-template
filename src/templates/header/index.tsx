import React, { useCallback } from "react";
import { Layout, Row, Button } from "antd";
import { removeItem } from "services/helpers/local-storage/index";
import { LocalStorageVariables } from "services/variables/local-storage";

const { Header } = Layout;

export const PageHeader: React.FC = () => {
    const logoutHandler = useCallback(() => {
        removeItem(LocalStorageVariables.USER);
        window.location.reload();
    }, []);

    return (
        <Header style={{ padding: 0 }}>
            <Row
                justify="end"
                align="middle"
                style={{ height: "100%", margin: "0 20px" }}
            >
                <Button type="primary" onClick={logoutHandler} danger>
                    Log out
                </Button>
            </Row>
        </Header>
    );
};
