import "antd/dist/antd.css";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "views";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { RestLink } from "apollo-link-rest";
import { Variables } from "services/variables";
import { ReduxStoreCreator } from "services/redux";
import { isAuthorized } from "services/helpers/user/authorize";
import { getItem } from "services/helpers/local-storage";
import { LocalStorageVariables } from "services/variables/local-storage";
import { IUser } from "services/types/local-storage";
import { setContext } from "apollo-link-context";

declare let module: any;
if (module && module.hot) {
    module.hot.accept();
}

const restLink = new RestLink({
    endpoints: {
        base: Variables.BACK_URL,
        api: Variables.API_URL,
    },
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            Authorization: isAuthorized()
                ? `Bearer ${
                      getItem<IUser>(LocalStorageVariables.USER)?.token || ""
                  }`
                : `Client-ID ${process.env.ACCESS_KEY}`,
        },
    };
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(restLink),
});

const store = ReduxStoreCreator.createStore({});

ReactDOM.render(
    <App client={client} store={store} />,
    document.getElementById("root"),
);
