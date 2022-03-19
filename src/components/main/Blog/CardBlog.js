import React from "react";
import { CardWrapper } from "../../../styles/styles";

const CardBlog = (props) => {
    return (
        <CardWrapper>
            <img src={props.img} alt={props.img} />
            <div className="title-autor-wrapper">
                <h3>{props.title}</h3>
                <div className="author-wrapper">
                    <img src={props.imgAuthor} alt={props.imgAuthor} />
                    <h4>{props.autor}</h4>
                </div>
            </div>
        </CardWrapper>
    );
};

export default CardBlog;
