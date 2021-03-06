export const setItem = (name: string, value: any): void => {
    localStorage.setItem(name, JSON.stringify(value));
};

export const getItem = <T extends unknown>(name: string): T | undefined => {
    const data = localStorage.getItem(name);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error(error);
        }
    }
    return undefined;
};

export const removeItem = (name: string): void => {
    localStorage.removeItem(name);
};
