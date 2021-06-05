import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledSignin } from './styles';
import Button from '../../Component/button';
import BigLogo from "../../assets/vectors/BigLogo";

const Signin = () => {
    const history = useHistory();
    return (
        <StyledSignin>
            <div>
                <BigLogo/>
            </div>
            <Button
                type="primary"
                htmlType="submit"
                width="15.4rem"
                height="4.2rem"
                color={'var(--primary-white)'}
                background={'var(--primary-green)'}
                radius={'4px'}
                onClick={() => history.push('/klasha/balances')}
            >
                Go to Dashboard
            </Button>
        </StyledSignin>
    );
};

export default Signin;
