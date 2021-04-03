export const isRequired = {
    rule: (value: any) => Boolean(value),
    message: "Поле обязательно для заполнения!",
};

export const minLenght = (minLenght: number) => {
    return {
        rule: (value: any) => {
            return !value || Boolean(value.length >= minLenght);
        },
        message: `Минимальное кол-во символов: ${minLenght}`,
    };
};

export const isEmail = {
    rule: (value: any) =>
        !value ||
        Boolean(
            String(value).match(
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            ),
        ),
    message: "Проверьте email адрес",
};
