import React from 'react';
import styled from 'styled-components';
import { Controller} from 'react-hook-form';


//This was imported to override moment.js to date-fns
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import {calendar} from "../types";
import Calendar from "../assets/vectors/Calendar";

const AntdDatePicker = generatePicker<Date>(dateFnsGenerateConfig);
const StyledDatePicker = styled(AntdDatePicker)`
    background: var(--primary-white);
    border: 1px solid #EBEBEB;
    border-radius: .4rem;
    height: 4.2rem;
    width: 11.7rem;
  
`

export const DatePicker = ({name, control, defaultValue, rules}: calendar) => {

    return <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({onChange, value}) => <StyledDatePicker onChange={onChange} value={value} suffixIcon={<Calendar/>}/>}
        rules={rules}

    />
}
