import styled from 'styled-components';

const StyledSignin = styled.main`
    background-color: rgba(44, 102, 93, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #2c665d;
    & + div {
        margin-bottom: 2rem;
    }
`;

export { StyledSignin };
