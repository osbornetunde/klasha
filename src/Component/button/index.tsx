import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';

type buttonProps = {
    height?: string;
    width?: string;
    background?: string;
    radius?: string;
};

type buttonProp = buttonProps & ButtonProps;

const Button = styled(AntButton)<buttonProp>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ background }) => background || ''};
    border-radius: ${({ radius }) => radius || '10px'};
` as React.FC<buttonProp>;

export default Button;
