import Card from "./card/card";
import './body.css'
import Data from '../../../restaurants.json'
// import Pagination from '@mui/material/Pagination';
// import { useEffect, useState } from "react";
import { useState } from "react";
let Body = () => {
    // let pages
    // const [page , setPage] = useState(1)
    const [data , setData] = useState([...Data.posts]);
    

    // let callingItem = async () => {
    //     pages = await fetch(`http://localhost:3000/posts?_page=${page}&_per_page=20`).then((response) => response.json() )
    //     setData(pages.data)
    //     setFixed(pages.data)
    // }
    
    // useEffect(() => {
    //     callingItem();
    // },[page])

    let restaurantFilter = (e) => {
        let arr = [...Data.posts]; 
        let filter = arr.filter((element) => element.name.toLowerCase().includes(e.target.value));
        setData(filter)
    }

    let ratingFilter = (e) => {
        let arr = [...Data.posts]; 
        if(Number(e.target.value) > 5 || Number(e.target.value) < 0){
            alert("Rating must between 0 to 5");
            e.target.value = "";
        }else{
            let filter = arr.filter((element) => Number(element.rating) >= Number(e.target.value));
            setData(filter)
        }
        
    }
    return (
        <div className="body">
            <div className="inputs">
                <input type="text" id="text"  placeholder="Search Restaurants..." onChange={restaurantFilter}/>
                <div className="rating">
                <label htmlFor="number">Minimum Rating: </label>
                <input type="number"  id="number" onChange={ratingFilter}/>
                </div>
            </div>

            <div className="restaurants">
                {
                    
                    data.map((element , index) => {
                       return <Card 
                       name = {element.name} 
                       rating = {element.rating}  
                       location = {element.address + ", " + element["address line 2"]} 
                       postalcode = {element.outcode + " " + element.postcode}
                       food_type = {element.type_of_food}
                       url = {element.URL}
                       key={index}/> 
                    })
                }
                
            </div>

            {/* <div className="pagination">
                <Pagination count={5} variant="outlined" shape="rounded" 
                    onChange={(element , number) => {
                        setPage(number)
                       
                    } }
                />
            </div>
             */}
        </div>
    )
}

export default Body;