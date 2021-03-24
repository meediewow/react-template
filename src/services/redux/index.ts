import { Store, createStore, applyMiddleware, compose } from "redux";
import { ISettings } from "services/redux/root/settings/reducer";
import { createRootReducer } from "./root";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IStore {
    settings: ISettings;
}

let composeEnhancers: any;
if (!__ENVIRONMENT__.production) {
    composeEnhancers = composeWithDevTools;
} else {
    composeEnhancers = compose;
}

class ReduxStoreCreatorClass {
    private store?: Store<IStore>;

    public createStore = (initialState = {}): Store<IStore> => {
        const store = createStore(
            createRootReducer,
            initialState,
            composeEnhancers(applyMiddleware()),
        );

        this.store = store;
        return this.store;
    };

    public getStore() {
        if (this.store) {
            return this.store;
        }
        return this.createStore({});
    }
}

export const ReduxStoreCreator = new ReduxStoreCreatorClass();
