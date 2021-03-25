import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { useRoutes } from "hooks/use-routes";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface IProps {
    component: React.ComponentType<any>;
}

export const MainTemplate = React.memo(
    (props: IProps): JSX.Element => {
        const [collapsed, setCollapsed] = useState(false);
        const routes = useRoutes();
        const history = useHistory();
        const location = useLocation();
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={() => setCollapsed((v) => !v)}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={[location.pathname || "/"]}
                        mode="inline"
                    >
                        {routes.map((item, index) => {
                            if (item.childItems) {
                                return (
                                    <SubMenu
                                        key={index}
                                        icon={item.icon}
                                        title={item.title}
                                    >
                                        {item.childItems.map((_item) => {
                                            <Menu.Item
                                                key={_item.path}
                                                icon={_item.icon}
                                                onClick={() =>
                                                    history.push(_item.path)
                                                }
                                            >
                                                {_item.title}
                                            </Menu.Item>;
                                        })}
                                    </SubMenu>
                                );
                            } else {
                                return (
                                    <Menu.Item
                                        key={item.path}
                                        icon={item.icon}
                                        onClick={() => history.push(item.path)}
                                    >
                                        {item.title}
                                    </Menu.Item>
                                );
                            }
                        })}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    />
                    <Content style={{ margin: "0 16px" }}>
                        <props.component />
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Mikhail Didevich (c) 2021
                    </Footer>
                </Layout>
            </Layout>
        );
    },
);
