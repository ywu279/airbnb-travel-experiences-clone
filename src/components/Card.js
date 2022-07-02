import katieZaferes from "../images/katie-zaferes.png"
import starIcon from "../images/star.svg"

export default function Card(){
    

    return(
        <section>
            <div className="card">
                <img src={katieZaferes} alt="" className="card--image"/>
                {/* <div>SOLD OUT</div> */}
                <div className="card--stats">
                    <img src={starIcon} alt="" /> 
                    <span>5.0</span>
                    <span className="gray">(6) · </span>
                    <span className="gray">USA</span> 
                </div>
                <p>Life lessons with kaite Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </section>
    )
}