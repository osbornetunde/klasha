import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { SignOutContext } from '../context/SignOutContext';

const PrivateRoute: React.FC<{
    component: React.FC<any>;
    path: string;
    exact?: boolean;
}> = ({ component: Component, path, exact = false, ...otherProps }) => {
    const { signOut } = useContext(SignOutContext);


    return (
        <Route
            {...otherProps}
            exact={exact}
            path={path}
            render={(props) =>
                true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
            }
        />
    );
};
export default PrivateRoute;
