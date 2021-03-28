import React from "react";
import { TitleSC } from "./styled";

interface IProps {
    title: string;
}

export const Title = React.memo((props: IProps) => {
    return <TitleSC>{props.title}:</TitleSC>;
});
