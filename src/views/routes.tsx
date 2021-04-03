import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";
import { useRedirect } from "hooks/use-redirect";
import { IRoutes, useRoutes } from "hooks/use-routes";

const ProtectedRoute: React.FC<RouteProps> = (props) => {
    useRedirect();
    return <Route {...props} />;
};

export const Routes = React.memo(() => {
    const routes = useRoutes();

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
            {renderRoutes(routes).map((item, index) => {
                if (item.isProtected) {
                    return (
                        <ProtectedRoute
                            exact={item.exact}
                            path={item.path}
                            component={() => (
                                <item.template component={item.component} />
                            )}
                            key={index}
                        />
                    );
                } else {
                    return (
                        <Route
                            exact={item.exact}
                            path={item.path}
                            component={() => (
                                <item.template component={item.component} />
                            )}
                            key={index}
                        />
                    );
                }
            })}
        </Switch>
    );
});
