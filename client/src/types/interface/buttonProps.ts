import { CSSProperties } from "react";

export interface genericButtonProp {
    onClick: () => void
    title?: string
    style?: CSSProperties
    iconUrl?: string
    iconClassName?: string
    disabled?: boolean
}