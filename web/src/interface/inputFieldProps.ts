import { ComponentProps } from "react";

export interface InputFieldProps extends ComponentProps<'input'> {
    error?:boolean
}