import React from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const TopMenuBar: React.FC = () => {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Submenu 1">
                    <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="Submenu 2">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu
                    key="sub3"
                    icon={<NotificationOutlined />}
                    title="Submenu 3"
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Sider>
    );
};

export default TopMenuBar;