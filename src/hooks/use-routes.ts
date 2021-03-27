import React, { useMemo } from "react";
import * as routePathes from "services/variables/routes";
import { Home } from "views/home";
import { Test } from "views/test";

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
    return useMemo(() => {
        const devRoutes: IRoutes[] = [
            {
                path: "/test",
                component: Test,
                title: "Test",
                exact: true,
            },
        ];
        const prodRoutes: IRoutes[] = [
            {
                path: routePathes.HOME,
                component: Home,
                title: "Home",
                exact: true,
            },
        ];
        if (__ENVIRONMENT__.production) {
            return prodRoutes;
        } else {
            return [...prodRoutes, ...devRoutes];
        }
    }, []);
};
