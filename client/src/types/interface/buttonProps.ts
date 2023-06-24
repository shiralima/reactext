import { CSSProperties } from "react";

export interface genericButtonProp {
    onClick:/*  () => void */ any
    title?: string
    style?: CSSProperties // TODO - check if need to be className
    iconUrl?: string
    iconClassName?: string
    disabled? :boolean
}