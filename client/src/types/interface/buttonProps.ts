import { CSSProperties } from "react";

export interface genericButtonProp {
    onClick: () => void
    title?: string
    style?: CSSProperties
    iconName?: string
    iconClassName?: string
    disabled?: boolean
}