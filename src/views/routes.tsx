import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";
import * as routePathes from "services/variables/routes";
import { Login } from "views/login";
import { useRedirect } from "hooks/use-redirect";
import { IRoutes, useRoutes } from "hooks/use-routes";
import { MainTemplate } from "templates/main";
import { useNotifications } from "hooks/use-notifications";

const ProtectedRoute: React.FC<RouteProps> = (props) => {
    useRedirect();
    return <Route {...props} />;
};

export const Routes = React.memo(() => {
    const routes = useRoutes();
    useNotifications();

    const renderRoutes = (routes: IRoutes[]): IRoutes[] => {
        return routes.reduce((acc, route) => {
            if (route.children) {
                return [...acc, route, ...renderRoutes(route.children)];
            } else {
                return [...acc, route];
            }
        }, []);
    };

    return (
        <Switch>
            <Route path={routePathes.LOGIN} component={Login} />
            {renderRoutes(routes).map((item, index) => {
                return (
                    <ProtectedRoute
                        exact={item.exact}
                        path={item.path}
                        component={() => (
                            <MainTemplate component={item.component} />
                        )}
                        key={index}
                    />
                );
            })}
        </Switch>
    );
});
