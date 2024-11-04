import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, CarOutlined, ToolOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => (
    <Sider width={200} className="sidebar">
        <Menu mode="inline" theme="dark" style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item icon={<CarOutlined />}>
                <Link to="/add-car">Add New Car</Link>
            </Menu.Item>
            <Menu.Item icon={<ToolOutlined />}>
                <Link to="/add-job">Add Job</Link>
            </Menu.Item>
        </Menu>
    </Sider>
);

export default Sidebar;
