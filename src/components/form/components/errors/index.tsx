import React from "react";
import { FieldMetaState } from "react-final-form";
import { ErrorsSC } from "./styled";

interface IProps {
    meta: FieldMetaState<any>;
}

export const ErrorsList = React.memo((props: IProps) => {
    return (
        <ErrorsSC>
            {(props.meta.error || props.meta.submitError) &&
                props.meta.touched && (
                    <span>{props.meta.error || props.meta.submitError}</span>
                )}
        </ErrorsSC>
    );
});
