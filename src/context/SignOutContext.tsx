import React, { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SignOutContextState } from '../types/context';

const defaultSignOutValue: SignOutContextState = {
    signOut: () => {},
};

const SignOutContext = createContext<SignOutContextState>(defaultSignOutValue);

const SignOutProvider: React.FC = ({ children }) => {
    const history = useHistory();
    const signOut = () => {
        history.push('/');
    };
    return <SignOutContext.Provider value={{ signOut }}>{children}</SignOutContext.Provider>;
};

export { SignOutContext, SignOutProvider };
