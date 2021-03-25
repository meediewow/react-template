import React, { useMemo } from "react";
import * as routePathes from "services/variables/routes";
import { Home } from "views/home";

interface IChildRoutes {
    component: any;
    path: string;
    title: string;
    exact: boolean;
    icon?: React.Component;
}

interface IRoutes extends IChildRoutes {
    childItems?: IChildRoutes[];
}

export const useRoutes = (): IRoutes[] => {
    return useMemo(
        () => [
            {
                path: routePathes.HOME,
                component: Home,
                title: "Home",
                exact: true,
            },
        ],
        [],
    );
};
