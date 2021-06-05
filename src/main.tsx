import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';
import 'antd/dist/antd.css';
import { SignOutProvider } from './context/SignOutContext';
import { ConfigProvider } from 'antd';



ConfigProvider.config({
    prefixCls: 'ant',
});

ReactDOM.render(
    <React.StrictMode>
            <Router>
                    <GlobalStyle />
                    <ConfigProvider>
                        <SignOutProvider>
                            <App />
                        </SignOutProvider>
                    </ConfigProvider>
            </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
