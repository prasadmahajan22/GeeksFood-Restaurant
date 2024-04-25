import { IoLocationSharp } from "react-icons/io5";
import { FaUtensils } from "react-icons/fa";
import './card.css'
let Card = (props) => {
    let restaurant = props;
    return (
        <div className="card">
            <div className="name_rating">
                <h2> {restaurant.name} </h2>
                <p> {
                        [...Array(5)].map((element,index) => {
                          return  (index < restaurant.rating) ? "⭐" : ""
                        })
                    } </p>
            </div>
            <div className="address">
                <div className="location">
                    <IoLocationSharp />
                    <p>{restaurant.location}</p>
                </div>
                <p className="postalcode"> {restaurant.postalcode} </p>
            </div>

            <div className="foodtype_link">
                <div className="foodtype">
                <FaUtensils className="utensil"/>
                <p>{restaurant.food_type}</p>
                </div>
                <a href= {restaurant.url}>Visit Menu</a>
            </div>
        </div>
    )
}
export default Card