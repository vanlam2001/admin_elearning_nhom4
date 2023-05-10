import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Dropdown, Button } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { localUserServ } from '../service/localService';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const menu = [
    getItem(<NavLink to={'/admin-users'}>Người dùng</NavLink>, '1', <PieChartOutlined />),
    getItem(<NavLink to={'/admin-course'}>Khóa học</NavLink>, '2', <DesktopOutlined />),

];
const items = [
    {
        key: "1",
        label: 
        <div
        onClick={() => {
            localUserServ.remove();
            window.location.href = '/';
        }}
        >Đăng xuất</div>,
    },
  ];
const AdminLayout = ({ Componet }) => {
    const isInfoLogin = localUserServ.get();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider breakpoint="md" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menu} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: '16px',
                        background: colorBgContainer,
                        height: 'auto',
                    }}
                >
                    <div className='flex flex-col sm:flex-row items-center justify-between h-full'>
                        <div className='text-xl font-bold text-[#000000e0] sm:text-xl'>Admin Vlearning</div>
                        {isInfoLogin ? (
                            <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottom"
                            >
                                <Button>Hello, {isInfoLogin.hoTen}</Button>
                            </Dropdown> 
                        ) : (
                            <div>
                                <NavLink to={'/login'}>
                                    <Button>Đăng Nhập</Button>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '16px',
                    }}
                >
                    <div
                        style={{
                            padding: 10,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Componet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;