import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

const App = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Menu Item 1</Menu.Item>
                    <Menu.Item key="2">Menu Item 2</Menu.Item>
                    <Menu.Item key="3">Menu Item 3</Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ padding: '24px' }}>
                    <h1>Hello</h1>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;