export interface IValidatorConfig {
    key: string;
    condition: (value: any) => boolean;
}

export const validateSearchParams = (
    validatorConfig: IValidatorConfig[],
    params: URLSearchParams,
): string => {
    const reducer = (acc: any, [key, value]: [string, any]) => {
        const paramValidator = validatorConfig.find((i) => i.key === key);
        if (value && !paramValidator) {
            return { ...acc, [key]: value };
        } else if (paramValidator?.condition(value)) {
            return { ...acc, [key]: value };
        }
        return acc;
    };
    return (
        "?" +
        String(
            new URLSearchParams(
                Object.entries(Object.fromEntries(params)).reduce(reducer, {}),
            ),
        )
    );
};
