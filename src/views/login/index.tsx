import React, { useMemo, useState } from "react";
import { Row } from "antd";
import { useHistory } from "react-router";
import * as routePathes from "services/variables/routes";
import { useRedirect } from "hooks/use-redirect";
import { setItem } from "services/helpers/local-storage/index";
import { LocalStorageVariables } from "services/variables/local-storage";
import { FormGroup, IFormItemValidation } from "components/form";
import { isRequired } from "services/helpers/form/validations";

export const Login: React.FC = () => {
    useRedirect({ redirectOnHome: true });
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const onSubmit = (values: any) => {
        setLoading(true);
        const timer = setTimeout(() => {
            console.log(values);
            setItem(LocalStorageVariables.USER, { login: true });
            history.push(routePathes.HOME);
            setLoading(false);
            clearTimeout(timer);
        }, 1000);
    };

    const formItems: IFormItemValidation[] = useMemo(() => {
        return [
            {
                name: "username",
                type: "text",
                placeholder: "Username",
                validationRules: [isRequired],
            },
            {
                name: "password",
                type: "password",
                placeholder: "Password",
                validationRules: [isRequired],
            },
            {
                name: "Select",
                type: "select",
                placeholder: "Select",
                validationRules: [isRequired],
                selectOptions: [
                    {
                        title: "first",
                        value: "first",
                    },
                    {
                        title: "second",
                        value: "second",
                    },
                ],
            },
        ];
    }, []);

    const formConfig = {
        cancelButton: false,
        submitText: "Log in",
    };

    return (
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
            <FormGroup
                onSubmit={onSubmit}
                formItems={formItems}
                formConfig={formConfig}
                loading={loading}
            />
        </Row>
    );
};
