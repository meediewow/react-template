import React, { useCallback } from "react";
import { Row, Button } from "antd";
import * as localStorageHelper from "services/helpers/local-storage/index";
import { LocalStorageVariables } from "services/variables/local-storage";
import { isAuthorized } from "services/helpers/user/authorize";
import { Variables } from "services/variables";
import { useLocation } from "react-router-dom";
import { HeaderSC } from "./styled";

const LOGIN_URL = "https://unsplash.com/oauth/authorize";

export const PageHeader: React.FC = () => {
    const location = useLocation();
    const logoutHandler = useCallback(() => {
        localStorageHelper.removeItem(LocalStorageVariables.USER);
        window.location.reload();
    }, []);

    const loginHandler = useCallback(() => {
        localStorageHelper.setItem(LocalStorageVariables.REDIRECT_URI, {
            search: location.search,
            pathname: location.pathname,
        });
        const params = {
            client_id: process.env.ACCESS_KEY || "",
            redirect_uri: Variables.REDIRECT_URL,
            response_type: "code",
            scope: "public+write_likes",
        };
        window.open(
            LOGIN_URL +
                "?" +
                Object.entries(params).reduce(
                    (acc, param) => `${acc}&${param[0]}=${param[1]}`,
                    "",
                ),
            "_self",
        );
    }, [location.pathname, location.search]);

    return (
        <HeaderSC>
            <Row justify="end" align="middle" style={{ height: "100%" }}>
                {isAuthorized() ? (
                    <Button type="primary" onClick={logoutHandler} danger>
                        Log out
                    </Button>
                ) : (
                    <Button type="primary" onClick={loginHandler}>
                        Log in
                    </Button>
                )}
            </Row>
        </HeaderSC>
    );
};
