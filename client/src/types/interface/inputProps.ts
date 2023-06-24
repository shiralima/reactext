import { CSSProperties } from "react"

export interface genericInputProp {
    onChange?: (a: any) => void
    label?: string
    style?: CSSProperties // TODO - check if need to be className
    rowNumber?: number
    required?: boolean
}