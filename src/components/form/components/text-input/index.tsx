import React from "react";
import { IFormItem } from "components/form/index";
import { Field } from "react-final-form";
import { Input } from "antd";
import { FieldValidator } from "final-form";
import { ErrorsList } from "components/form/components/errors";
import { Title } from "components/form/components/title";
import { WrapperSC } from "./styled";

interface IProps {
    field: IFormItem;
    validate: FieldValidator<any> | undefined;
}

export const TextField = React.memo((props: IProps) => {
    return (
        <WrapperSC>
            <Field name={props.field.name} validate={props.validate}>
                {({ input, meta }) => (
                    <>
                        <Title title={props.field.placeholder} />
                        <Input
                            placeholder={
                                props.field.placeholder || props.field.name
                            }
                            {...input}
                            width={20}
                        />
                        <ErrorsList meta={meta} />
                    </>
                )}
            </Field>
        </WrapperSC>
    );
});
