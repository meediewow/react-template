import React from "react";
import { Form, FormProps } from "react-final-form";
import { Button } from "antd";
import { FormSC, ButtonsSC } from "./styled";
import { TextField } from "components/form/components/text-input";
import { PasswordItem } from "./components/password";
import { SelectItem } from "./components/select";

interface IValidationRule {
    rule: (data: any) => boolean;
    message: string;
}

export interface SelectOption {
    value: string | number;
    title: string;
}

type InputTypes = "text" | "password" | "select";

export interface IFormItem {
    name: string;
    type: InputTypes;
    placeholder: string;
}

export interface IFormItemValidation extends IFormItem {
    validationRules: IValidationRule[];
    selectOptions?: SelectOption[];
}

interface IForm {
    cancelText?: string;
    submitText: string;
}

interface IProps extends FormProps {
    formItems: IFormItemValidation[];
    formConfig: IForm;
    loading: boolean;
}

const composeValidators = (rules: IValidationRule[]) => (value: any) => {
    const result = rules.reduce((error, validator) => {
        return error || validator.rule(value) ? error : validator.message;
    }, undefined);
    return result;
};

export const FormGroup = (props: IProps): React.ReactElement | null => {
    return (
        <Form
            {...props}
            render={(renderProps) => {
                return (
                    <FormSC
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        {props.formItems.map(
                            ({ validationRules, ...rest }, index) => {
                                switch (rest.type) {
                                    case "text": {
                                        return (
                                            <TextField
                                                field={rest}
                                                key={index}
                                                validate={composeValidators(
                                                    validationRules,
                                                )}
                                            />
                                        );
                                    }
                                    case "password": {
                                        return (
                                            <PasswordItem
                                                field={rest}
                                                key={index}
                                                validate={composeValidators(
                                                    validationRules,
                                                )}
                                            />
                                        );
                                    }
                                    case "select": {
                                        return (
                                            <SelectItem
                                                field={rest}
                                                key={index}
                                                validate={composeValidators(
                                                    validationRules,
                                                )}
                                                options={rest.selectOptions}
                                            />
                                        );
                                    }
                                }
                            },
                        )}
                        <ButtonsSC>
                            <Button
                                htmlType="submit"
                                type="primary"
                                disabled={
                                    renderProps.submitting ||
                                    renderProps.pristine
                                }
                                onClick={renderProps.form.submit}
                                loading={props.loading}
                            >
                                {props.formConfig.submitText}
                            </Button>
                            {props.formConfig.cancelText && (
                                <Button
                                    type="default"
                                    onClick={renderProps.form.reset}
                                    disabled={
                                        renderProps.submitting ||
                                        renderProps.pristine
                                    }
                                >
                                    Reset
                                </Button>
                            )}
                        </ButtonsSC>
                    </FormSC>
                );
            }}
        />
    );
};
