import MathLabel from "./matchLabelComp";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import "../styles/quizTile.css"
import { useEffect, useState } from "react";

const ages = {
  18: "16s",
  21: "20s",
  31: "30s",
  41: "40s",
  51: "50s" 
}

export default function IndividualTileComp(props){
  const [clicked, setClick] = useState(false)

    const StarRating = ({ rating }) => {
        const totalStars = 5;
      
        return (
          <div>
            {[...Array(totalStars)].map((_, index) => {
              const starValue = index + 1;
              if (starValue <= rating) {
                return <FaStar style={{width:"25px"}} key={index} />;
              } else if (starValue - rating === 0.5) {
                return <FaStarHalfAlt style={{width:"25px"}} key={index} />;
              } else {
                return <FaRegStar style={{width:"25px"}} key={index} />;
              }
            })}
          </div>
        );
      };



    function showConcerns(){
      let toRet = []
      let count = 0
      if(props.concerns){
        props.concerns.forEach((each)=>{
          if(each == "Uneven%20texture"){
            each = "Uneven skin"
          }
          else if(each == "Fine%20linesWrinkles"){
            each = "Fine lines/Wrinkles"
          }
          toRet.push(
            <h3 id="concernDes" key={count}>Good for {each}</h3>
          )
          count += 1
        })
      }

      if(props.skintypes){
        props.skintypes.forEach((each)=>{
          toRet.push(
            <h3 id="blueSkin" key={count}>Meant for {each} skin</h3>
          )
          count += 1
        })
      }
      
      const matchAge = ages[props.age]

      if(matchAge){
        toRet.push(
          <h3 id="greenSkin" key={count}>Matches your age</h3>
        )
      }

      return toRet

    }  

      

    return(
            <button onClick={()=>{setClick((prev)=>!prev)}} className={props.style}>
                <div className={clicked == false? "toShowAfterClick": "toShowAfterClick " + props.style + "clickedTile"}>
                  {showConcerns()}
                </div>
                <img src={props.img} alt={props.name} />
                <h2>{props.brand}</h2>
                <h1>{props.name}</h1>
                <h2>{props.price}</h2>
                <h3>{StarRating({rating:props.rating.split(" ")[0]})}</h3>
                <MathLabel perc={props.perc}/>
            </button>
    )

    
}