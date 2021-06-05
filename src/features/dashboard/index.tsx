import React, {Suspense} from 'react';
import {Avatar, Badge, Layout, Spin} from 'antd';
import {Route, Switch} from 'react-router-dom';
import {StyledLayoutContainer} from './styles';
import {routes} from '../../routes';
import Sidebar from './Sidebar';
import Profile from "../../assets/vectors/Profile";
import Notification from "../../assets/vectors/Notification";

const { Header, Content } = Layout;

const Dashboard = () => {

    return (
        <StyledLayoutContainer>
            <Layout>
                <Sidebar />
                <Layout style={{ background: 'var(--primary-white)' }}>
                    <Header className="site-layout-sub-header-background">
                        <div className="header-content">

                            <div className={'page-title'}>
                                    <p>Balances</p>
                                <p>Today, 19th October 2020</p>

                            </div>
                            <div
                                className={'profile-wrapper'}
                            >
                                <span>
                                    <Badge count={1} title="notification" size="default">
                                        <Avatar
                                            shape="circle"
                                            icon={<Notification />}
                                            style={{
                                                backgroundColor: 'var(--primary-grey)',
                                                display:'grid',
                                                placeItems:'center',
                                                width:'5rem',
                                                height:'5rem'
                                            }}
                                            size="large"
                                        />
                                    </Badge>
                                </span>
                                <span>
                                    <Badge title="message" size="default">
                                        <Avatar
                                            shape="circle"
                                            icon={<Profile />}
                                            style={{
                                                backgroundColor: 'rgba(255, 131, 119, 0.1)',
                                                border: '1px solid #FF8377',
                                                display:'grid',
                                                placeItems:'center',
                                                width:'5rem',
                                                height:'5rem'
                                            }}
                                            size="large"
                                        />
                                    </Badge>
                                </span>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '5.5rem 4rem 5.3rem',
                            overflowY: 'scroll',
                            maxHeight: 'calc(100vh - 11rem)',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                minHeight: 360,
                            }}
                        >
                            <Suspense
                                fallback={
                                    <div
                                        style={{
                                            display: 'grid',
                                            placeItems: 'center',
                                            width: '100%',
                                            height: 'calc(100vh - 7.5rem - 24px)',
                                        }}
                                    >
                                        <Spin size="large" />
                                    </div>
                                }
                            >
                                <Switch>
                                    {routes.map((route) => {
                                        return route.component ? (
                                            <Route
                                                key={route.path}
                                                path={route.path}
                                                render={() => <route.component />}
                                            />
                                        ) : null;
                                    })}
                                </Switch>
                            </Suspense>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </StyledLayoutContainer>
    );
};

export default Dashboard
