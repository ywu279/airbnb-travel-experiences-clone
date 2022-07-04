import React from 'react';
import {ReactComponent as LocationIcon} from "../images/LocationIcon.svg"

export default function Journal(props){
    //console.log(props)
    return (
        <div className="journal">
            <img src={props.item.imageUrl} alt="" className="journal--img"/>
            <div>
                <div className="journal--info">
                    <p>
                        <LocationIcon className="LocationIcon"/>
                        {props.item.location.toUpperCase()}
                    </p>
                    <a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    {/* Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener */}
                </div>
                <h1 className="journal--title">{props.item.title}</h1>
                <p className="bold">{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

