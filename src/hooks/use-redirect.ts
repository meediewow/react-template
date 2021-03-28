import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as routePathes from "services/variables/routes";
import { isAuthorized } from "services/helpers/user/authorize";

interface IProps {
    redirectOnHome?: boolean;
}

export const useRedirect = (props: IProps = {}): void => {
    const history = useHistory();
    useEffect(() => {
        if (!isAuthorized()) {
            history.push(routePathes.LOGIN);
        } else if (props.redirectOnHome) {
            history.push(routePathes.HOME);
        }
    }, []);
};
