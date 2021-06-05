import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import SidebarLogo from '../../assets/vectors/SidebarLogo';
import {generalSidebarOptions, mainSidebarOptions} from './sidebarOptions';

const { Sider } = Layout;

const Sidebar = () => {
    const location = useLocation();

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            style={{ height: '100vh', backgroundColor: ' rgba(255, 255, 255, 0.2)', position: 'relative' }}
            width="280px"
        >
            <div
                style={{
                    width: '100%',
                    height: '9.9rem',
                    display:'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingLeft: '5rem'
                }}
            >
                <SidebarLogo />
            </div>


            <Menu
                mode="inline"
                defaultSelectedKeys={['/dashboard/analytics']}
                selectedKeys={[location.pathname]}
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    paddingTop: '5.7rem',
                    maxHeight: 'calc(100vh - 0rem - 9.9rem)',
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    backdropFilter: 'blur(20px)',
                }}
            >
                <p className={'sidebar-main-title'}>Main Pages</p>
                {mainSidebarOptions.map((item) => {
                    return (
                        <Menu.Item key={item.link} icon={item.icon} className="menu-item">
                            <NavLink to={item.link} activeStyle={{ color: 'var(--primary-black)' }}>
                                {item.name}
                            </NavLink>
                        </Menu.Item>
                    )
                })}
                <p className="sidebar-main-title">General</p>
                {generalSidebarOptions.map((item) => {
                    return (
                        <Menu.Item key={item.link} icon={item.icon} className="menu-item">
                            <NavLink to={item.link} activeStyle={{ color: 'var(--primary-black)' }}>
                                {item.name}
                            </NavLink>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </Sider>
    );
};

export default Sidebar;
