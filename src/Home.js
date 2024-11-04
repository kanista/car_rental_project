import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';
import './Home.scss';

const { Header, Content } = Layout;

const Home = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="top-bar">
                <h5>Car Service Center</h5>
                <Avatar icon={<UserOutlined />} className="avatar" />
            </Header>

            {/* Main Layout with Sidebar and Content */}
            <Layout>
                <Sidebar />
                <Content className="content">
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
