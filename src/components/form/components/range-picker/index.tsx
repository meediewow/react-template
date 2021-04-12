import React from "react";
import { Field } from "react-final-form";
import { Title } from "components/form/components/title";
import { ErrorsList } from "components/form/components/errors";
import { IFormItem } from "components/form/index";
import { FieldValidator } from "final-form";
import { DatePicker } from "antd";

interface IProps {
    field: IFormItem;
    validate: FieldValidator<any> | undefined;
}

export const RangePickerItem = React.memo((props: IProps) => {
    return (
        <Field name={props.field.name} validate={props.validate}>
            {({ input, meta }) => (
                <>
                    <Title title={props.field.placeholder} />
                    <DatePicker.RangePicker
                        placeholder={["Начало", "Конец"]}
                        {...input}
                        showTime
                        style={{
                            width: "100%",
                        }}
                    />
                    <ErrorsList meta={meta} />
                </>
            )}
        </Field>
    );
});
