import FooterComp from "../../components/FooterComp"
import HeaderComponent from "../../components/header"
import { useLocation, useNavigate } from "react-router-dom"
import "../../styles/quizTile.css"
import backicon from "/backicon.png"
 
import { useEffect } from "react"

export default function QuizPageSens(){
    const name = useLocation().state
    let stateInfo = useLocation().state
    const Nav = useNavigate()


    function nextQ(bool){
        stateInfo.sensitive = bool
        Nav("/quiz/concern", {state: stateInfo})
    }

    function back(){
        Nav("/quiz/skin", {state: stateInfo.name})
        return
    }

    return(
        <>
            <HeaderComponent />
            <div className="quizName">
                <button className="backButton" id="backbutt" onClick={back}>
                <img src={backicon} alt="backicon" className="backicon"/></button>
                <h1>Would you say your skin is sensitive?</h1>

                <div className="trueFalseCon">
                    <button onClick={()=>{nextQ(true)}}>
                        True
                    </button>

                    <button onClick={()=>{nextQ(false)}}>
                        False
                    </button>
                </div>
            </div>

            <FooterComp/>
        </>
    )
}