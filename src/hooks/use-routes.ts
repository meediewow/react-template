import React, { useMemo } from "react";
import * as routePathes from "services/variables/routes";
import { Home } from "views/home";

interface IBreadcrumb {
    path: string;
    title: string;
}
export interface IRoutes {
    breadcrumbs: IBreadcrumb[];
    component: any;
    path: string;
    title: string;
    exact: boolean;
    icon?: React.Component;
    children?: IRoutes[];
    isProtected: boolean;
}

const breadcrumbsMaper = (
    item: IRoutes,
    index: number,
    array: IRoutes[],
    parentBreadcrumbs: IBreadcrumb[] = [],
): IRoutes => {
    if (item.children) {
        return {
            ...item,
            breadcrumbs: [...parentBreadcrumbs, ...item.breadcrumbs],
            children: item.children.map((i, index, array) =>
                breadcrumbsMaper(i, index, array, [
                    ...parentBreadcrumbs,
                    ...item.breadcrumbs,
                ]),
            ),
        };
    } else {
        return {
            ...item,
            breadcrumbs: [...parentBreadcrumbs, ...item.breadcrumbs],
        };
    }
};

export const useRoutes = (): IRoutes[] => {
    return useMemo(() => {
        const devRoutes: IRoutes[] = [
            {
                path: "/test",
                component: Home,
                title: "Test",
                exact: true,
                isProtected: true,
                breadcrumbs: [
                    {
                        path: "/test",
                        title: "Test",
                    },
                ],
            },
            {
                path: "/first",
                component: Home,
                title: "first",
                isProtected: true,
                breadcrumbs: [
                    {
                        path: "first",
                        title: "first",
                    },
                ],
                exact: true,
                children: [
                    {
                        path: "/sec",
                        component: Home,
                        title: "sec",
                        isProtected: true,
                        breadcrumbs: [
                            {
                                path: "sec",
                                title: "sec",
                            },
                        ],
                        exact: true,
                        children: [
                            {
                                path: "/third",
                                component: Home,
                                title: "third",
                                isProtected: true,
                                breadcrumbs: [
                                    {
                                        path: "third",
                                        title: "third",
                                    },
                                ],
                                exact: true,
                            },
                        ],
                    },
                ],
            },
        ];
        const prodRoutes: IRoutes[] = [
            {
                path: routePathes.HOME,
                component: Home,
                title: "Home",
                breadcrumbs: [
                    {
                        path: routePathes.HOME,
                        title: "Home",
                    },
                ],
                isProtected: false,
                exact: true,
            },
        ];
        if (__ENVIRONMENT__.production) {
            return prodRoutes.map(breadcrumbsMaper);
        } else {
            return [...prodRoutes, ...devRoutes].map(breadcrumbsMaper);
        }
    }, []);
};
