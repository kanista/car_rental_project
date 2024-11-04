import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, CarOutlined, ToolOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => (
    <Sider width={200} className="sidebar">
        <Menu mode="inline" theme="dark" style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item icon={<DashboardOutlined />}>Dashboard</Menu.Item>
            <Menu.Item icon={<CarOutlined />}>Add New Car</Menu.Item>
            <Menu.Item icon={<ToolOutlined />}>Add Job</Menu.Item>
        </Menu>
    </Sider>
);

export default Sidebar;
