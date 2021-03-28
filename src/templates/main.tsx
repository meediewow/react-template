import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { IRoutes, useRoutes } from "hooks/use-routes";
import { PageHeader } from "templates/header";
import { BarcodeOutlined } from "@ant-design/icons";
import { Variables } from "services/variables";
import * as routePathes from "services/variables/routes";
import { LogoSC, LayoutSC, TitleSC, TitleWrapperSC } from "./styled";

const { Content, Footer, Sider } = Layout;
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

        const renderRoutes = (routes: IRoutes[]): React.ReactNode => {
            return routes.map((item, index) => {
                if (item.children) {
                    return (
                        <SubMenu
                            key={index}
                            icon={item.icon}
                            title={item.title}
                        >
                            {renderRoutes(item.children)}
                        </SubMenu>
                    );
                    return;
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
            });
        };

        const findRoute = (routes: IRoutes[]): IRoutes | undefined => {
            const reduceRoutes = (routes: IRoutes[]) => {
                return routes.reduce(reducer, []);
            };
            const reducer = (acc: IRoutes[], route: IRoutes): IRoutes[] => {
                if (route.children) {
                    return [...acc, route, ...reduceRoutes(route.children)];
                } else {
                    return [...acc, route];
                }
            };

            return reduceRoutes(routes).find((route) => {
                return route.path === location.pathname;
            });
        };

        const currentRoute = findRoute(routes);

        return (
            <LayoutSC style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={() => setCollapsed((v) => !v)}
                >
                    <Link to={routePathes.HOME}>
                        <LogoSC>
                            <BarcodeOutlined style={{ fontSize: 30 }} />
                            {!collapsed && Variables.PROJECT_NAME}
                        </LogoSC>
                    </Link>

                    <Menu
                        theme="dark"
                        defaultSelectedKeys={[location.pathname || "/"]}
                        mode="inline"
                    >
                        {renderRoutes(routes)}
                    </Menu>
                </Sider>
                <Layout>
                    <PageHeader />
                    <Content style={{ margin: 20 }}>
                        <TitleWrapperSC>
                            <TitleSC>{currentRoute?.title}</TitleSC>
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item>
                                    <Link to={routePathes.HOME}>
                                        <HomeOutlined />
                                    </Link>
                                </Breadcrumb.Item>
                                {currentRoute?.breadcrumbs.map(
                                    (item, index) => {
                                        if (item.path === routePathes.HOME) {
                                            return;
                                        }
                                        return (
                                            <Breadcrumb.Item key={index}>
                                                <Link to={item.path}>
                                                    {item.title}
                                                </Link>
                                            </Breadcrumb.Item>
                                        );
                                    },
                                )}
                            </Breadcrumb>
                        </TitleWrapperSC>

                        <props.component />
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Mikhail Didevich (c) 2021 - {new Date().getFullYear()}
                    </Footer>
                </Layout>
            </LayoutSC>
        );
    },
);
