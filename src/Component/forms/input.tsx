import * as React from 'react';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { Input as AntdInput } from 'antd';
import { input, prefixinput} from '../../types';
import { Error } from './Error';
import { device } from '../../utils/device';


interface InputContainerProp {
    height?: string;
}

const InputContainer = styled.div<InputContainerProp>`
    width: 100%;

  .ant-input-affix-wrapper, .ant-input,
  .ant-input-password{
    height: 4.2rem;
    background: var(--primary-white);
    border: 1px solid #EBEBEB;
    border-radius: 4px;
  }
  .ant-input-affix-wrapper {
    height: 4.2rem;
  }
    .ant-input,
    .ant-input-password {
        
        height: 3.2rem;
    }

    .ant-input[type='password'] {
        height: 3.2rem;
    }

    @media ${device.tablet} {
        .ant-input,
        .ant-input-password {
            height: ${({ height }) => height || '3.2rem'};
        }

        .ant-input[type='password'] {
            height: 4.2rem;
        }
    }
`;

const Input: React.FC<input> = ({ control, name, placeholder, defaultValue, errors, rules, readOnly }) => (
    <InputContainer>
        <Controller
            render={({ onChange, value }) => (
                <AntdInput
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    bordered={!readOnly}
                />
            )}
            control={control}
            name={name}
            defaultValue={defaultValue}
            rules={rules}
        />
        <Error name={name} errors={errors} />
    </InputContainer>
);

const InputPassword: React.FC<input> = ({ control, name, placeholder, defaultValue, errors, rules }) => (
    <InputContainer>
        <Controller
            render={({ onChange, value }) => (
                <AntdInput.Password onChange={onChange} value={value} placeholder={placeholder} />
            )}
            control={control}
            name={name}
            defaultValue={defaultValue}
            rules={rules}
        />
        <Error name={name} errors={errors} />
    </InputContainer>
);


const SuffixInput: React.FC<prefixinput> = ({
    control,
    name,
    placeholder,
    defaultValue,
    errors,
    rules,
    prefix,
    height,
    suffix,
}) => (
    <InputContainer height={height}>
        <Controller
            render={({ onChange, value }) => (
                <AntdInput onChange={onChange} value={value} placeholder={placeholder} suffix={suffix} />
            )}
            control={control}
            name={name}
            defaultValue={defaultValue}
            rules={rules}
        />
        <Error name={name} errors={errors} />
    </InputContainer>
);
export { Input, InputPassword, SuffixInput };
