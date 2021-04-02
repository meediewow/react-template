import * as routePathes from "services/variables/routes";

class VariableClass {
    public API_URL = "https://api.unsplash.com/";
    public BACK_URL = "https://unsplash.com/";
    public PROJECT_NAME = "JAZZPIXELS TEST";
    public REDIRECT_URL = `http://localhost:8080${routePathes.LOGIN}`;
}

export const Variables = new VariableClass();
