import React from 'react';
import EarthIcon from "../images/earth.png"

export default function Banner(){
    return (
        <div className="banner">
            <img src={EarthIcon} alt="" className="EarthIcon"/>
            my travel journal.
        </div>
    )
}