import React from "react";
import { GlobalStyles } from "services/styled-components/global";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

interface IProps {
    client: any;
    store: any;
}

export const App = React.memo(
    (props: IProps): JSX.Element => {
        return (
            <BrowserRouter>
                <GlobalStyles />
                <ApolloProvider client={props.client}>
                    <Provider store={props.store}>
                        <Routes />
                    </Provider>
                </ApolloProvider>
            </BrowserRouter>
        );
    },
);
