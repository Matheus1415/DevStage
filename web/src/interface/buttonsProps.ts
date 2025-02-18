import { ComponentProps, ReactNode } from "react"

export interface ButtonProps extends ComponentProps<'button'> {
    text?: string,
    children?: ReactNode,
}