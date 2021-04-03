import React from "react";
import * as SC from "./styled";

interface IProps {
    component: React.ComponentType<any>;
}

export const FormTemplate = React.memo((props: IProps) => {
    return (
        <SC.WrapperSC>
            <props.component />
        </SC.WrapperSC>
    );
});
