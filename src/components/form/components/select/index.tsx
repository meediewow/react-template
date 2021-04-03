import React from "react";
import { IFormItem, SelectOption } from "components/form/index";
import { Field } from "react-final-form";
import { Select } from "antd";
import { FieldValidator } from "final-form";
import { ErrorsList } from "components/form/components/errors";
import { Title } from "components/form/components/title";
import { SelectSC, WrapperSC } from "./styled";

interface IProps {
    field: IFormItem;
    validate: FieldValidator<any> | undefined;
    options?: SelectOption[];
}

export const SelectItem = React.memo((props: IProps) => {
    return (
        <WrapperSC>
            <Field name={props.field.name} validate={props.validate}>
                {({ input, meta, defaultValue }) => (
                    <>
                        <Title title={props.field.placeholder} />
                        <SelectSC
                            placeholder={
                                props.field.placeholder || props.field.name
                            }
                            {...input}
                            style={{ minWidth: 300, display: "flex" }}
                            defaultValue={defaultValue || ""}
                            allowClear
                            showSearch
                        >
                            <Select.Option key={"none"} value="">
                                Choose...
                            </Select.Option>
                            {props.options?.map((item, index) => {
                                return (
                                    <Select.Option
                                        key={index}
                                        value={item.value}
                                    >
                                        {item.title}
                                    </Select.Option>
                                );
                            })}
                        </SelectSC>
                        <ErrorsList meta={meta} />
                    </>
                )}
            </Field>
        </WrapperSC>
    );
});
