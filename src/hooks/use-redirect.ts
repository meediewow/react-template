import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as routePathes from "services/variables/routes";

interface IProps {
    redirectOnHome?: boolean;
}

export const useRedirect = (props: IProps = {}): void => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    useEffect(() => {
        if (!user?.login) {
            history.push(routePathes.LOGIN);
        } else if (props.redirectOnHome) {
            history.push(routePathes.HOME);
        }
    }, []);
};
