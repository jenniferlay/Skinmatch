import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import IndividualTileComp from "./individualTileComp";
import axios from "axios"
import "../styles/dashComp.css"
import tonericon from "/tonericon.png"
import cleansericon from "/cleansericon.png"
import moisturizericon from "/moisturizericon.png"
import serumicon from "/serumicon.png"
import sunscreenicon from "/sunscreenicon.png"
import skinmatchicon from "/skinmatchicon.png"

export default function SpecificProductComp(){
    const Nav = useNavigate()
    const quizData = useLocation().state
    const [loading, setLoading] = useState(true)
    const [data, setQuizData] = useState(null)
    const [drop, setDrop] = useState(false)


    useEffect(()=>{
        let concern1 = null
        let concern2 = null
        let concern3 = null

        if(quizData.concern.length == 3){
            concern1 = quizData.concern[0]
            concern2 = quizData.concern[1]
            concern3 = quizData.concern[2]
        }

        else if (quizData.concern.length == 2){
            concern1 = quizData.concern[0]
            concern2 = quizData.concern[1]
        }

        else{
            concern1 = quizData.concern[0]
        }

        axios.get("https://rateto-backend.onrender.com/JENNIFER/home", {
            params:{
                skinType: quizData.skin,
                age: quizData.age,
                skinConcern1: concern1,
                skinConcern2: concern2,
                skinConcern3: concern3
            }
        }).then((response)=>{
            if(response.data.success == false){
                Nav("/")
                alert("something went wrong please try again")
                return
            }
            setQuizData(response.data.data[quizData.product])
            setLoading(false)
        }).catch(()=>{
            Nav("/")
            alert("something went wrong please try again")
        })

    }, [quizData.product])


    function specificProduct(product){
        setDrop(false)
        if(product == quizData.product){
            return
        }

        quizData.product = product
        setLoading(true)
        Nav("/dashboard/product", {state: quizData})


    }

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

    function topProducts(){

        return data.map((each, index) => {
            const perc = Math.round((each.match/2.5)*100)

            return(<IndividualTileComp age={quizData.age} concerns={each.concern} skintypes={each.skinType} style={"allTiles"} key={index} img={each.img} rating={each.rating} brand={each.brand} name={each.name} price={each.price} perc={perc}/>)

            });
    }

    function dashHome(){
        Nav("/dashboard", {state: quizData})
    }


    return(
        <div className="dashBoardComp"> 
            
            <div className="toshow">

                <div className={drop == false? "lefttoshow": "lefttoshow dropperActive"}>
                    <button id="mobile_selectNav" onClick={()=>{setDrop((prev)=> !prev)}}>Select</button>                    
                    <button onClick={dashHome} className="skinmatch-btn">
                        <img src={skinmatchicon} alt="producticon" className="producticon"/>SkinMatch</button>
                    <button className="product-btn" onClick={()=>{specificProduct("cleansers")}}>    
                        <img src={cleansericon} alt="producticon" className="producticon"/>Cleansers</button>
                    <button className="product-btn" onClick={()=>{specificProduct("moisterizers")}}>
                        <img src={moisturizericon} alt="producticon" className="producticon"/>Moisterizers</button>
                    <button className="product-btn" onClick={()=>{specificProduct("toners")}}>
                        <img src={tonericon} alt="producticon" className="producticon"/>Toners</button>
                    <button className="product-btn" onClick={()=>{specificProduct("serums")}}>
                        <img src={serumicon} alt="producticon" className="producticon"/>Serums</button>
                    <button className="product-btn" onClick={()=>{specificProduct("sunscreens")}}>
                        <img src={sunscreenicon} alt="producticon" className="producticon"/>Sunscreens</button>
                </div>

                {loading == true? (
                
                <div className="toload">
                        <div className="loader centeredLoad">
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                        <div className="loader-square"></div>
                    </div>
                </div>):

                <div className="righttoshow specTiles">
                    {/* <h3>Hey {quizData.name}</h3> */}

                    <h1>{quizData.product.charAt(0).toUpperCase() + quizData.product.slice(1)}</h1>

                    <div className="topMatches gridFormatting">
                        {topProducts()}
                    </div>


                </div>}
                
            </div>
            

        </div>

    )
}