import HeaderComponent from "../../components/header"
import FooterComp from "../../components/FooterComp"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import backicon from "/backicon.png"

export default function QuizPageSkin(){
    const name = useLocation()
    const Nav = useNavigate()


    function nextQ(skintype){
        if(name.state == ""){
            return
        }

        if(skintype == ""){
            return
        }

        Nav("/quiz/sensitive", {state: {
            name: name.state,
            skin: skintype
        }})
    }

    function back(){
        Nav("/quiz/name")
        return
    }


    return(
        <>
            <HeaderComponent />
                <div className="quizName">
                    <button className="backButton" id="backbutt" onClick={back}>
                    <img src={backicon} alt="backicon" className="backicon"/></button>
                    <h3>Hey {name.state}!</h3>
                    <h1>How would you describe your skin?</h1>

                    <div className="skinTileContainer">
                        <button onClick={()=>{nextQ("Dry")}} className="skinTile">
                            <img src="https://cdn-icons-png.flaticon.com/512/101/101890.png" alt="" />
                            <h4>Dry</h4>
                        </button>

                        <button onClick={()=>{nextQ("Oily")}} className="skinTile">
                            <img src="https://cdn-icons-png.flaticon.com/512/694/694073.png" alt="" />
                            <h4>Oily</h4>
                        </button>

                        <button onClick={()=>{nextQ("Normal")}} className="skinTile">
                            <img src="https://cdn-icons-png.flaticon.com/512/4340/4340959.png" alt="" />
                            <h4>Normal</h4>
                        </button>

                        <button onClick={()=>{nextQ("Combination")}} className="skinTile">
                            <img src="https://cdn-icons-png.flaticon.com/512/6187/6187245.png" alt="" />
                            <h4>Combination</h4>
                        </button>

                    </div>
                </div>
            <FooterComp />
        </>
    )
}