import React from "react";
import { Provider } from "react-redux";
import { ReduxStoreCreator } from "services/redux";

export const App = (): JSX.Element => {
    const store = ReduxStoreCreator.createStore({});
    return (
        <Provider store={store}>
            <div>test</div>
        </Provider>
    );
};
