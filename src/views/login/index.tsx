import { useToken } from "hooks/mutations/use-token";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { Variables } from "services/variables";
import * as localStorageHelper from "services/helpers/local-storage";
import { LocalStorageVariables } from "services/variables/local-storage";
import * as routePathes from "services/variables/routes";
import { IRedirectUrl } from "services/types/local-storage";
import { notification } from "antd";

export const Login: React.FC = () => {
    const { fetch } = useToken();
    const history = useHistory();
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const { code } = Object.fromEntries(params);

    useEffect(() => {
        if (code) {
            fetch({
                variables: {
                    body: {
                        code,
                        client_id: process.env.ACCESS_KEY || "",
                        client_secret: process.env.SECRET_KEY || "",
                        redirect_uri: Variables.REDIRECT_URL,
                        grant_type: "authorization_code",
                    },
                },
            })
                .then((result) => {
                    if (result?.data?.token?.access_token) {
                        localStorageHelper.setItem(LocalStorageVariables.USER, {
                            token: result.data.token.access_token,
                        });
                    }
                })
                .finally(() => {
                    const redirectUri:
                        | IRedirectUrl
                        | undefined = localStorageHelper.getItem(
                        LocalStorageVariables.REDIRECT_URI,
                    );
                    localStorageHelper.removeItem(
                        LocalStorageVariables.REDIRECT_URI,
                    );
                    notification.info({
                        message: "Success!",
                        description: "Are u successfully logged in!",
                    });
                    history.push({
                        pathname: redirectUri?.pathname || routePathes.HOME,
                        search: redirectUri?.search || "",
                    });
                });
        }
    }, [code, fetch, history]);

    return null;
};
