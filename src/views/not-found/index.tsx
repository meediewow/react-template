import React from "react";
import { useHistory } from "react-router-dom";
import * as SC from "./styled";
import * as routePathes from "services/variables/routes";

export const NotFound = React.memo(() => {
    const history = useHistory();

    return (
        <SC.WrapperSC>
            <SC.TitleSC>Error 404</SC.TitleSC>
            <SC.ButtonSC onClick={() => history.push(routePathes.HOME)}>
                Home
            </SC.ButtonSC>
        </SC.WrapperSC>
    );
});
