import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/loadanimation.css"
import "../styles/dashComp.css"
import IndividualTileComp from "./individualTileComp"
import tonericon from "/tonericon.png"
import cleansericon from "/cleansericon.png"
import moisturizericon from "/moisturizericon.png"
import serumicon from "/serumicon.png"
import sunscreenicon from "/sunscreenicon.png"
import skinmatchicon from "/skinmatchicon.png"



export default function DashHomeComp(){
    const Nav = useNavigate()
    let quizData = useLocation().state
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
            setQuizData(response.data.data)
            setLoading(false)
        }).catch(()=>{
            Nav("/")
            alert("something went wrong please try again")
        })

    }, [])

    function specificProduct(product){
        setDrop(false)
        quizData.product = product
        Nav("/dashboard/product", {state: quizData})
    }

    function dashHome(){
        setDrop(false)
        Nav("/dashboard", {state: quizData})
    }



    function topProducts(products){
        const topThree = data[products].slice(0, 3);

        return topThree.map((each, index) => {
            const perc = Math.round((each.match/2.5)*100)
            return(<IndividualTileComp age={quizData.age} skintypes={each.skinType} concerns={each.concern} style={"topMatchTile"} key={index} img={each.img} rating={each.rating} brand={each.brand} name={each.name} price={each.price} perc={perc}/>)
            });
    }

    return(

        <div className="dashBoardComp">
            {loading == true? (
            
            <div className="toload">
                    <div className="loader">
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                </div>
            </div>): 
            
            <div className="toshow">
                <div className={drop == true? "lefttoshow dropperActive": "lefttoshow"}>
                    <button id="mobile_selectNav" onClick={()=>{setDrop((prev)=> !prev)}}>Select</button>                    
                    <button className="skinmatch-btn" onClick={dashHome}>
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

                <div className="righttoshow">
                    <h3>Hey {quizData.name}!</h3>
                        
                    <h2>Here are your top matches</h2>

                    <h1>Cleansers</h1>
                    <div className="topMatches">
                        {topProducts("cleansers")}
                    </div>

                    <h1>Moisterizers</h1>
                    <div className="topMatches">
                        {topProducts("moisterizers")}
                    </div>

                    <h1>Serums</h1>
                    <div className="topMatches">
                        {topProducts("serums")}
                    </div>

                    <h1>Toners</h1>
                    <div className="topMatches">
                        {topProducts("toners")}
                    </div>

                    <h1>Sunscreen</h1>
                    <div className="topMatches">
                        {topProducts("sunscreens")}
                    </div>

                </div>
                
            </div>}
            

        </div>
    )
}