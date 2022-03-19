import React, { Component } from "react";
import Slider from "react-slick";
import CardBlog from "./CardBlog";
import imgblog01 from "../../../assets/blog_image_1.svg";
import imgblog02 from "../../../assets/blog_image_2.svg";
import imgblog03 from "../../../assets/blog_image_3.svg";
import imgblog04 from "../../../assets/blog_image_4.svg";
import author01 from "../../../assets/photo_1.svg";
import author02 from "../../../assets/photo_2.svg";
import author03 from "../../../assets/photo_3.svg";
import author04 from "../../../assets/photo_4.svg";

export default class SliderComp extends Component {
    render() {
        const settings = {
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1196,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: "30px",
                    },
                },
                {
                    breakpoint: 1111,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 827,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "170px",
                    },
                },
                {
                    breakpoint: 697,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "100px",
                    },
                },
                {
                    breakpoint: 559,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "80px",
                    },
                    
                },

                {
                    breakpoint: 517,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "10px",
                        dots: true,
                    },
                    
                },
            ],
        };
        return (
            <Slider {...settings}>
                <CardBlog img={imgblog02} title="Nutrition: Tips for Improving Your Health" imgAuthor={author02} autor="Kevin Ibrahim" />
                <CardBlog img={imgblog03} title="The top 10 benefits of eating healthy" imgAuthor={author03} autor="Mike Jackson" />
                <CardBlog img={imgblog04} title="What Meal not to skip to stay Healthy" imgAuthor={author04} autor="Bryan MacGregor" />
                <CardBlog img={imgblog01} title="Quick-start guide to nuts and seeds" imgAuthor={author01} autor="Josh Martin" />
            </Slider>
        );
    }
}
