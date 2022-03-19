import styled from "styled-components";
import illustration from "../assets/illustration.svg";
import illustrationMob from "../assets/illustration_mobile.svg";
import searchIcon from "../assets/search-icon.svg";
import servicesBg from "../assets/section_services.svg";
import membershipBg from "../assets/section_membership.svg";
import membershipBgMb from "../assets/membership_mobile.svg";
import registerBg from "../assets/registerbg.svg";

// Medias Queries
const px1276 = "1277px";
const px1096 = "1096px";
const px925 = "925px";
const px847 = "847px";
const px769 = "769px";
const px676 = "676px";
const px601 = "601px";
const px481 = "481px";
const px435 = "435px";
const px387 = "387px";

// ========= Main ===========
//Header Component
export const HeaderWrapper = styled.header`
    .nav-desk {
        height: 103px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 9%;

        .logo {
            color: #badc58;
            font-size: 32px;
            font-weight: bold;
        }

        .nav {
            color: white;

            font-family: "Mulish", sans-serif;
            font-size: 16px;
            font-weight: bold;

            ul {
                display: flex;
                align-items: center;
                gap: 32px;

                a:nth-child(-n + 3) {
                    &:hover {
                        color: #f4fbef;
                    }
                }

                .register-button {
                    height: 52px;
                    width: 130px;

                    background-color: white;

                    border-radius: 5px;

                    color: #badc58;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:hover {
                        background-color: #f4fbef;
                        transition: 0.2s;
                    }
                }
            }
        }
    }

    @media (max-width: ${px1276}) {
        .nav-desk {
            display: none;
        }
    }
`;

export const NavMobileWrapper = styled.nav`
    height: 103px;

    display: none;

    border-bottom: 1px solid #badc58;

    @media (max-width: ${px1276}) {
        display: flex;
        justify-content: center;
        align-items: center;

        color: #badc58;

        font-family: "Mulish", sans-serif;
        font-size: 16px;
        font-weight: bold;

        ul {
            display: flex;
            align-items: center;
            gap: 50px;

            .register-button {
                height: 52px;
                width: 130px;

                background-color: #badc58;

                border-radius: 5px;

                color: white;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    @media (max-width: ${px601}) {
        ul {
            gap: 30px;

            padding: 0 10px;

            .register-button {
                width: 60%;
            }
        }
    }

    @media (max-width: ${px387}) {
        font-size: 14px;
    }
`;

//Home Component
export const HomeWrapper = styled.section`
    padding-bottom: 200px;

    .input-wrapper {
        height: 280px;

        margin-top: 190px;
        margin-left: 12%;

        .logo {
            display: none;
        }

        .fild {
            height: 52px;
            width: 343px;

            border-radius: 5px;
            border: 1px solid #2d3561;

            margin-top: 32px;
            margin-right: 16px;

            padding-left: 16px;
        }

        .button-submit {
            height: 52px;
            width: 52px;

            background-color: #badc58;
            background-image: url(${searchIcon});
            background-repeat: no-repeat;
            background-position: center;

            border: none;
            border-radius: 5px;

            cursor: pointer;
        }

        h1 {
            width: 412px;
            color: #1d164d;

            font-size: 48px;
            font-weight: bold;
        }
    }

    @media (max-width: ${px1276}) {
        display: flex;
        justify-content: space-between;

        padding-bottom: 0;

        .input-wrapper {
            .logo {
                color: #badc58;

                display: flex;

                font-size: 48px;
                font-weight: bold;

                a {
                    margin-top: -150px;
                }
            }
        }
    }

    @media (max-width: ${px847}) {
        flex-direction: row-reverse;

        .input-wrapper {
            margin-left: 0;

            .logo {
                a {
                    margin-top: -130px;
                }
            }
        }
    }

    @media (max-width: ${px769}) {
        flex-direction: column;

        justify-content: center;
        align-items: center;

        .input-wrapper {
            .logo {
                margin-left: -100px;
                padding-left: 30px;
                a {
                    margin-top: -130px;
                }
            }
        }
    }

    @media (max-width: ${px601}) {
        .input-wrapper {
            .logo {
                margin-left: -50px;
                a {
                    margin-top: -130px;
                }
            }
        }
    }

    @media (max-width: ${px435}) {
        .input-wrapper {
            height: auto;
            padding: 0 20px 50px 20px;

            .logo {
                font-size: 42px;
            }

            div {
                width: 100%;
            }

            .fild {
                width: 80%;
                margin-right: 0;
            }

            .button-submit {
                width: 18%;
                margin-left: 1%;
            }

            h1 {
                width: 80%;
                font-size: 36px;
            }
        }
    }
`;

export const Illustration = styled.div`
    height: 743.3px;
    width: 872px;

    background-image: url(${illustration});
    background-repeat: no-repeat;

    position: absolute;

    right: 0;
    top: 0;

    z-index: -1;

    @media (max-width: ${px1276}) {
        display: none;
    }
`;

export const IllustrationMobile = styled.div`
    display: none;

    @media (max-width: ${px1276}) {
        height: 600px;
        width: 550px;

        background-image: url(${illustrationMob});
        background-repeat: no-repeat;

        display: flex;
    }

    @media (max-width: ${px925}) {
        background-size: 300px;
        background-position: center;
    }

    @media (max-width: ${px769}) {
        height: 300px;
        width: 350px;

        background-position: left;
    }

    @media (max-width: ${px601}) {
        background-position: center;
    }
`;

//Recipes Component
export const RecipesWrapper = styled.section`
    background-color: #fafafc;

    padding-bottom: 98px;

    .title-wrapp {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding-top: 48px;
        padding-bottom: 36px;

        h2 {
            color: #1d164d;

            font-size: 32px;
            font-weight: bold;
        }

        p {
            height: 49px;
            max-width: 510px;

            color: #9e9baf;

            font-family: "Mulish", sans-serif;
            font-size: 16px;
            font-weight: normal;

            margin-top: 16px;

            text-align: center;
        }
    }

    .cards-generic-wrapp {
        display: flex;
        justify-content: center;

        .cards-wrapp {
            height: 500px;
            width: 1192px;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 36px;

            @media (max-width: ${px1096}) {
                height: auto;
            }
        }
    }
`;

export const RecipesCardWrapper = styled.div`
    height: 225px;
    width: 528px;

    background-color: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 15px 20px #1d164d14;

    display: flex;

    div {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            height: 63px;
            width: 187px;

            color: #1d164d;

            font-size: 23px;
            font-weight: bold;
        }

        button {
            height: 48px;
            width: 134px;

            background-color: #badc58;
            border: none;
            border-radius: 7px;

            color: #ffffff;

            cursor: pointer;

            font-family: "Mulish", sans-serif;
            font-size: 16px;

            margin-top: 16px;
            margin-right: 52px;
        }
    }

    @media (max-width: ${px601}) {
        width: 90%;
        height: 180px;

        img {
            width: 200px;
        }
    }

    @media (max-width: ${px435}) {
        height: 130px;

        img {
            width: 150px;
        }

        div {
            h3 {
                width: 90%;
                font-size: 18px;
            }

            button {
                height: 30px;
                width: 70%;
                margin-left: 20px;
                font-size: 14px;
            }
        }
    }
`;

//Services Component
export const ServicesWrapper = styled.section`
    background-image: url(${servicesBg});
    background-repeat: no-repeat;

    padding-left: 57%;
    padding-bottom: 136px;

    div {
        max-width: 420px;

        display: flex;
        flex-direction: column;

        padding-top: 137px;
        margin-right: 30px;

        h2 {
            color: #2d3561;

            font-size: 32px;
            font-weight: bold;

            margin-bottom: 32px;
        }

        p {
            color: #bcbcbc;

            font-family: "Mulish", sans-serif;
            font-size: 16px;

            margin-bottom: 48px;
        }

        button {
            height: 52px;
            width: 150px;

            background: #badc58;

            border: initial;
            border-radius: 5px;

            box-shadow: 0px 15px 20px #1d164d14;

            color: #ffffff;

            cursor: pointer;

            font-family: "Mulish", sans-serif;
            font-size: 16px;
        }
    }

    @media (max-width: ${px847}) {
        background-size: 500px;
        padding-bottom: 40px;

        div {
            padding-top: 30px;

            h2 {
                font-size: 28px;
            }

            p {
                font-size: 12px;
            }
        }
    }

    @media (max-width: ${px601}) {
        background-image: none;

        display: flex;
        justify-content: center;
        align-items: center;

        padding-left: 30px;
        padding-right: 30px;

        margin-right: 0;
    }
`;

//Blog Component
export const BlogWrapper = styled.section`
    background-color: #fafafc;
    padding-bottom: 130px;

    overflow-x: hidden;

    .title-wrapp {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding-top: 48px;
        padding-bottom: 36px;

        h2 {
            color: #1d164d;

            font-size: 32px;
            font-weight: bold;
        }

        p {
            height: 49px;
            max-width: 510px;

            color: #9e9baf;

            font-family: "Mulish", sans-serif;
            font-size: 16px;
            font-weight: normal;

            margin-top: 16px;

            text-align: center;
        }
    }

    @media (max-width: ${px601}) {
    }
`;

export const CardWrapper = styled.div`
    height: 450px;
    width: 348px;

    background-color: white;

    border-radius: 7px;

    box-shadow: 0px 15px 20px #1d164d14;

    cursor: pointer;

    .title-autor-wrapper {
        h3 {
            height: 63px;

            color: #1d164d;

            font-size: 24px;
            font-weight: bold;

            margin: 32px 0 24px 24px;

            padding-right: 16px;
        }

        h4 {
            color: #9e9baf;

            font-family: "Mulish", sans-serif;
            font-size: 16px;
            font-weight: normal;
        }
    }

    .author-wrapper {
        display: flex;
        align-items: center;
        margin-left: 24px;

        h4 {
            margin-left: 8px;
        }
    }
`;

//Membership Component
export const MembershipWrapper = styled.section`
    display: flex;
    justify-content: space-between;

    .input-wrapper {
        width: 460px;

        margin-top: 252px;
        margin-left: 14%;

        .fild {
            height: 52px;
            width: 343px;

            border-radius: 5px;
            border: 1px solid #2d3561;

            margin-top: 32px;
            margin-right: 16px;

            padding-left: 16px;
        }

        .button-submit {
            height: 52px;
            width: 93px;

            background-color: #badc58;

            border: none;
            border-radius: 5px;

            color: #ffffff;

            cursor: pointer;
        }

        h2 {
            width: 460px;
            color: #1d164d;

            font-size: 32px;
            font-weight: bold;

            padding-right: 80px;
        }
    }

    @media (max-width: ${px1276}) {
        padding-bottom: 100px;
    }

    @media (max-width: ${px847}) {
        flex-direction: column;
        align-items: center;

        .input-wrapper {
            margin-top: 100px;
            margin-left: 0;
        }
    }

    @media (max-width: ${px481}) {
        .input-wrapper {
            height: auto;
            width: 100%;
            padding: 0 20px 50px 20px;

            div {
                width: 100%;
            }

            .fild {
                width: 75%;
                margin-right: 0;
            }

            .button-submit {
                width: 24%;
                margin-left: 1%;
            }

            h2 {
                width: 100%;
                font-size: 36px;
                padding-right: 0;
            }
        }
    }

    @media (max-width: ${px481}) {
        .input-wrapper {
            margin-top: 50px;
        }
    }
`;

export const MembershipBg = styled.div`
    height: 673px;
    width: 678px;

    background-image: url(${membershipBg});
    background-repeat: no-repeat;

    @media (max-width: ${px1276}) {
        display: none;
    }
`;

export const MembershipBgMobile = styled.div`
    display: none;

    @media (max-width: ${px1276}) {
        height: 450px;
        width: 475px;

        background-image: url(${membershipBgMb});
        background-repeat: no-repeat;

        display: flex;

        margin-top: 50px;
    }

    @media (max-width: ${px925}) {
        background-size: 200px;
        background-position: right;
    }

    @media (max-width: ${px847}) {
        height: 250px;
        width: 250px;

        background-position: left;

        margin-top: 0;
    }

    @media (max-width: ${px481}) {
        background-position: center;
    }
`;

//Footer Component
export const FooterWrapper = styled.footer`
    height: 103px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Mulish", sans-serif;
    font-size: 16px;
    font-weight: normal;

    padding: 0 8%;

    .copyright {
        color: #1d164d;
    }

    .links {
        color: #9e9baf;

        display: flex;
        gap: 20px;

        padding-left: 20px;
    }

    @media (max-width: ${px847}) {
        font-size: 14px;
    }

    @media (max-width: ${px676}) {
        padding: 0 2%;
    }

    @media (max-width: ${px601}) {
        padding-right: 0;
    }

    @media (max-width: ${px481}) {
        gap: 0;
        padding: 0 5px;
    }
`;

// ========= REGISTER ===========

export const GenericWrapper = styled.section`
    height: 103px;
`;

export const RegisterHeaderWrapper = styled.section`
    .nav-desk {
        height: 103px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 9%;

        background-color: #badc58;

        #register_logo {
            color: white;
            font-size: 32px;
            font-weight: bold;
        }

        .nav {
            color: white;

            font-family: "Mulish", sans-serif;
            font-size: 16px;
            font-weight: bold;

            ul {
                display: flex;
                align-items: center;
                gap: 32px;

                .register-button {
                    height: 52px;
                    width: 130px;

                    background-color: white;

                    border-radius: 5px;

                    color: #badc58;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
`;

export const FormWrapper = styled.section`
    height: auto;

    background-color: #badc58;
    background-image: url(${registerBg});
    background-repeat: no-repeat;
    background-position: right;

    display: flex;
    align-items: center;

    flex-direction: column;

    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    
    h1 {
        color: #4f4f4f;

        font-size: 45px;
        line-height: 56px;
        letter-spacing: 0.15em;

        margin-left: -50px;
    }

    form {
        height: auto;
        width: 400px;

        display: flex;
        flex-direction: column;
        gap: 10px;

        padding: 50px 30px;

        .fields {
            color: #4f4f4f;

            display: flex;
            flex-direction: column;
            gap: 8px;

            font-size: 14px;
            line-height: 18px;

            div {
                display: flex;


                flex-direction: column;
                input {
                    height: 30px;
                    width: 90%;

                    background: #f7fbfc;

                    border: 1px solid #cacaca;
                    border-radius: 2px;
                    box-shadow: 2px 4px 6px rgba(79, 79, 79, 0.15);

                    font-weight: normal;

                    margin-top: -10px;

                    padding-left: 10px;

                    &:focus {
                        outline: none;
                        border-bottom: 2px solid #badc58;
                    }
                }

                p {
                    color: red;
                    font-weight: bold;
                }
            }
        }
    }

    .button-submit {
        height: 30px;
        width: 90%;

        background: #acd4f3;

        box-shadow: 2px 4px 6px rgba(79, 79, 79, 0.15);
        border-radius: 15px;
        border: 1px solid #cccccc;

        color: #4f4f4f;

        cursor: pointer;

        font-weight: bolder;

    }
`;