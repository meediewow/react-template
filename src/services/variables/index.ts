import * as routePathes from "services/variables/routes";

class VariableClass {
    public API_URL = "https://api.unsplash.com/";
    public BACK_URL = "https://unsplash.com/";
    public PROJECT_NAME = "React Template";
    public REDIRECT_URL = `http://localhost:${process.env.APP_PORT}${routePathes.LOGIN}`;
}

export const Variables = new VariableClass();
