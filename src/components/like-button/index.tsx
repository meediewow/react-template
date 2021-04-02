import React, { useState } from "react";
import { isAuthorized } from "services/helpers/user/authorize";
import { LikeButtonSC } from "./styled";

interface IProps {
    isLiked: boolean;
    likes: number;
    onLike: () => void;
    onDislike: () => void;
}

export const LikeButton = React.memo((props: IProps) => {
    const [isAnimate, setIsAnimate] = useState(props.isLiked);

    const onClick = () => {
        if (isAuthorized()) {
            if (props.isLiked) {
                props.onDislike();
            } else {
                props.onLike();
            }
            setIsAnimate((v) => !v);
        }
    };

    return (
        <LikeButtonSC
            isLiked={props.isLiked}
            isAnimate={isAnimate}
            onClick={onClick}
        >
            <div className="text">
                <svg>
                    <use xlinkHref="assets/images/svg/paw.svg#heart" />
                </svg>
                {!props.isLiked && <span>Like</span>}
            </div>
            <span>{props.likes}</span>
            <div className="paws">
                <svg className="paw">
                    <use xlinkHref="assets/images/svg/paw.svg#paw" />
                </svg>
                <div className="paw-effect">
                    <div></div>
                </div>
                <svg className="paw-clap">
                    <use xlinkHref="assets/images/svg/paw.svg#paw-clap" />
                </svg>
            </div>
        </LikeButtonSC>
    );
});
