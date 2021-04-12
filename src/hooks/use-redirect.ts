import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as routePathes from "services/variables/routes";
import { isAuthorized } from "services/helpers/user/authorize";

export const useRedirect = (): void => {
    const history = useHistory();
    useEffect(() => {
        if (!isAuthorized()) {
            history.push(routePathes.LOGIN);
        }
    }, [history]);
};

export const useAuthorizedRedirect = (): void => {
    const history = useHistory();
    useEffect(() => {
        if (isAuthorized()) {
            history.push(routePathes.HOME);
        }
    }, [history]);
};
