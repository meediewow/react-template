import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "views";

declare let module: any;
if (module && module.hot) {
    module.hot.accept();
}
ReactDOM.render(<App />, document.getElementById("root"));
