import {ReactComponent as StarIcon} from '../images/star.svg'

export default function Card(props){
    // console.log(props)
    return(
        <div className="card">
            {/* <div className="card--status" hidden={props.status ? "" : "hidden"}>{props.status}</div> */}
            {/* <div className="card--status" style={{display: props.status ? "block" : "none"}}>{props.status}</div> */}
            {props.status && <div className="card--status">{props.status}</div>}
            <img src={props.img} alt="" className="card--image"/>
            <div className="card--stats">
                <StarIcon /> 
                <span>{props.rating}</span>
                <span className="gray">({props.review}) · </span>
                <span className="gray">{props.location}</span> 
            </div>
            <p>{props.info}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>      
    )
}

