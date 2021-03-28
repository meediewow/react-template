import React from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { useHistory } from "react-router";
import * as routePathes from "services/variables/routes";
import { useRedirect } from "hooks/use-redirect";
import { setItem } from "services/helpers/local-storage/index";
import { LocalStorageVariables } from "services/variables/local-storage";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export const Login: React.FC = () => {
    useRedirect({ redirectOnHome: true });
    const history = useHistory();
    const onFinish = () => {
        setItem(LocalStorageVariables.USER, { login: true });
        history.push(routePathes.HOME);
    };

    return (
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...layout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...layout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    );
};
