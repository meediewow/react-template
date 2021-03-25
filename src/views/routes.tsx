import React from "react";
import { Switch, Route } from "react-router-dom";
import * as routePathes from "services/variables/routes";
import { Login } from "views/login";
import { useRedirect } from "hooks/use-redirect";
import { Home } from "views/home";

interface IProtectedRouteProps {
    component: React.ComponentType<any>;
    path: string;
}

const ProtectedRoute = (props: IProtectedRouteProps): JSX.Element => {
    useRedirect();
    return <Route path={props.path} component={props.component} />;
};

export const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route path={routePathes.LOGIN} component={Login} />
            <ProtectedRoute path={routePathes.HOME} component={Home} />
        </Switch>
    );
};
