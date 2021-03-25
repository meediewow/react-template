import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { Users } from "components/users";

interface IProps {
    client: any;
    store: any;
}

export const App = React.memo(
    (props: IProps): JSX.Element => {
        return (
            <ApolloProvider client={props.client}>
                <Provider store={props.store}>
                    <Users />
                </Provider>
            </ApolloProvider>
        );
    },
);
