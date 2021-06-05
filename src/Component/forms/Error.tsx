import * as React from 'react';
import styled from 'styled-components';
import { error } from '../../types';

const ErrorContainer = styled.p`
    font-size: 1rem;
    color: red;
    margin: 0.5rem 0rem 0rem;
    padding: 0;
`;

export const Error: React.FC<error> = ({ errors, name }) =>
    errors[name] ? <ErrorContainer>{errors[name].message}</ErrorContainer> : null;
