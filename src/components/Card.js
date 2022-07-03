import {ReactComponent as StarIcon} from '../images/star.svg'

export default function Card(props){
    // console.log(props)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {/* Try one of the following conditional rendering to play around */}
            {/* Put conditional rendering in {}, if the 1st statement is true, then the 2nd statement will also get called; if not, the 2nd one will never run. */}
            {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}   */}
            {/* <div className="card--badge" hidden={props.openSpots === 0 ? "" : "hidden"}>SOLD OUT</div> */}
            {/* <div className="card--badge" style={{display: props.openSpots === 0 ? "block" : "none"}}>SOLD OUT</div> */}

            {badgeText && <div className="card--badge">{badgeText}</div>} 
            <img src={`./images/${props.item.coverImg}`} alt="" className="card--image"/>
            <div className="card--stats">
                <StarIcon /> 
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) · </span>
                <span className="gray">{props.item.location}</span> 
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>      
    )
}

