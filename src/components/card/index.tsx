import { LikeButton } from "components/like-button";
import React from "react";
import { isAuthorized } from "services/helpers/user/authorize";
import { WrapperSC, ImageSC } from "./styled";

interface IProps {
    id: string;
    url: string;
    onLike: (id: string) => void;
    onDislike: (id: string) => void;
    isLiked: boolean;
    likes: number;
}

export const Card = React.memo((props: IProps) => {
    return (
        <WrapperSC>
            {isAuthorized() && (
                <LikeButton
                    isLiked={props.isLiked}
                    likes={props.likes}
                    onLike={() => props.onLike(props.id)}
                    onDislike={() => props.onDislike(props.id)}
                />
            )}
            <ImageSC alt="image" src={props.url} />
        </WrapperSC>
    );
});
