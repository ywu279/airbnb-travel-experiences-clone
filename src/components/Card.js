import {ReactComponent as StarIcon} from '../images/star.svg'

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={props.img} alt="" className="card--image"/>
            {/* <div>SOLD OUT</div> */}
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