import { FieldErrors, FieldValues } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';
import React from 'react';


export type input = {
    name: string;
    placeholder: string;
    defaultValue?: string;
    control: Control<FieldValues>;
    errors: FieldErrors<FieldValues>;
    rules?: object;
    readOnly?: boolean;
};

export type prefixinput = input & { prefix?: React.ReactElement; suffix?: React.ReactElement; height?: string };

export interface error {
    name: string;
    errors: FieldErrors;
}

export type calendar = {
    control: Control<FieldValues>;
    name: string;
    defaultValue: string;
    rules?: object;
};
