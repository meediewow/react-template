import { createAction } from "redux-actions";

const prefix = "SETTINGS";

export const MAINTENANCE_SET = `${prefix}.MAINTENANCE_SET`;

export const SettingsActions = {
    setMaintenance: createAction(
        MAINTENANCE_SET,
        (isMaintenance: boolean) => isMaintenance,
    ),
};
