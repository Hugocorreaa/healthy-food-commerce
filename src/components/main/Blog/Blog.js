import React from "react";
import { BlogWrapper } from "../../../styles/styles";
import SliderComp from "./Slider";

const Blog = () => {
    return (
        <BlogWrapper>
            <div className="title-wrapp" id="blog">
                <h2>Our Best Recipes</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <SliderComp />
        </BlogWrapper>
    );
};

export default Blog;
