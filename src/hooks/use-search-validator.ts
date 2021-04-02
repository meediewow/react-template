import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
    IValidatorConfig,
    validateSearchParams,
} from "services/helpers/query-search";

export const useSearchValidator = (validatorConfig: IValidatorConfig[]) => {
    const { search, pathname } = useLocation();
    const { push } = useHistory();

    useEffect(() => {
        const params = new URLSearchParams(search);
        const searchParams = Object.fromEntries(params);
        if (searchParams) {
            push({
                pathname,
                search: validateSearchParams(validatorConfig, params),
            });
        }
    }, [pathname, push, search, validatorConfig]);
};
