import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";
import * as routePathes from "services/variables/routes";
import { Login } from "views/login";
import { useRedirect } from "hooks/use-redirect";
import { useRoutes } from "hooks/use-routes";
import { MainTemplate } from "templates/main";
import { useNotifications } from "hooks/use-notifications";

const ProtectedRoute: React.FC<RouteProps> = (props) => {
    useRedirect();
    return <Route {...props} />;
};

export const Routes = React.memo(() => {
    const routes = useRoutes();
    useNotifications();
    return (
        <Switch>
            <Route path={routePathes.LOGIN} component={Login} />
            {routes.map((i, index) => {
                if (i.childItems) {
                    return i.childItems.map((_i, _index) => {
                        return (
                            <ProtectedRoute
                                exact={_i.exact}
                                path={_i.path}
                                component={() => (
                                    <MainTemplate component={_i.component} />
                                )}
                                key={_index}
                            />
                        );
                    });
                } else {
                    return (
                        <ProtectedRoute
                            exact={i.exact}
                            path={i.path}
                            component={() => (
                                <MainTemplate component={i.component} />
                            )}
                            key={index}
                        />
                    );
                }
            })}
        </Switch>
    );
});
