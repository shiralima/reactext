import { CSSProperties } from "react"

export interface genericInputProp {
    label?: string
    style?: CSSProperties // TODO - check if need to be className
    rowNumber?: number
    isRequired?:boolean
}