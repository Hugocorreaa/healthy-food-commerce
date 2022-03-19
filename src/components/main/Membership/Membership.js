import React from "react";
import { MembershipWrapper, MembershipBg, MembershipBgMobile } from "../../../styles/styles";

const Membership = () => {
    return (
        <MembershipWrapper>
            <div className="input-wrapper" id="join">
                <h2>Join our membership to get special offer</h2>
                <div>
                    <input className="fild" type="text" placeholder="Enter your email address"></input>
                    <input className="button-submit" type="submit" value="Join"></input>
                </div>
            </div>
            <MembershipBg />
            <MembershipBgMobile />
        </MembershipWrapper>
    );
};

export default Membership;
