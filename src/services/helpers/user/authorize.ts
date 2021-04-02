import { getItem } from "services/helpers/local-storage/index";
import { LocalStorageVariables } from "services/variables/local-storage";
import { IUser } from "services/types/local-storage";

export const isAuthorized = (): boolean => {
    const user = getItem<IUser>(LocalStorageVariables.USER);
    return Boolean(user?.token) || false;
};
