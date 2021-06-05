import React from 'react';
import styled from 'styled-components';
import { Button, Dropdown as AntdDropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const StyledDropdown = styled(AntdDropdown)`
    width: 6.8rem;
    height: 2.5rem;
    background-color: var(--primary-grey);
    border-radius: 0.4rem;
    padding: 0.4rem;
    font-family: var(--founders-regular);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 17px;
    color: var(--primary-black);




`;

const Dropdown: React.FC<Element | any> = ({ menu, value }) => {
    return (
        <StyledDropdown overlay={menu}>
            <Button>
                {value} <DownOutlined />
            </Button>
        </StyledDropdown>
    );
};

export default Dropdown;
