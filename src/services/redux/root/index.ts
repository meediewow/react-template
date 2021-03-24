import { combineReducers } from "redux";
import { IStore } from "services/redux";
import { settingsReducer } from "services/redux/root/settings/reducer";

export const createRootReducer = combineReducers<IStore>({
    settings: settingsReducer,
});

export type ReduxStateType = ReturnType<typeof createRootReducer>;
