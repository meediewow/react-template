import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "views";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { RestLink } from "apollo-link-rest";
import { Variables } from "services/variables";
import { ReduxStoreCreator } from "services/redux";

declare let module: any;
if (module && module.hot) {
    module.hot.accept();
}

const restLink = new RestLink({ uri: Variables.API_URL });
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
});
const store = ReduxStoreCreator.createStore({});

ReactDOM.render(
    <App client={client} store={store} />,
    document.getElementById("root"),
);
