import { handleActions } from "redux-actions";
import {
    SettingsActions,
    MAINTENANCE_SET,
} from "services/redux/root/settings/actions";

export interface ISettings {
    maintenance: boolean;
}

export const settingsInitialState: ISettings = {
    maintenance: false,
};

export const settingsReducer = handleActions<ISettings>(
    {
        [MAINTENANCE_SET]: (
            state,
            { payload }: ReturnType<typeof SettingsActions.setMaintenance>,
        ) => ({
            ...state,
            maintenance: payload,
        }),
    },
    settingsInitialState,
);
