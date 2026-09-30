import HeaderComponent from "../../components/header"
import FooterComp from "../../components/FooterComp"
import "../../styles/quizTile.css"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import backicon from "/backicon.png"

export default function QuizPageName(){
    const [name, setName] = useState("")
    const Nav = useNavigate()

    function changer(curName){
        setName(curName)
        if(curName == ""){
            const classes = document.getElementById("NAMEBUTT").classList
            if(classes.contains("afterChange")){
                classes.remove("afterChange")
            }
            return
        }

        document.getElementById("NAMEBUTT").classList.add("afterChange")

    }

    function nextQ(){
        if(name == ""){
            return
        }
        Nav("/quiz/skin", {state: name})
    }

    function back(){
        Nav("/")
        return
    }

    function enterListen(e){
        if(e.key == "Enter"){
            nextQ()
        }

    }

    return(
        <>
            <HeaderComponent />
                <div className="quizName">
                    <button className="backButton" id="backbutt" onClick={back}>
                    <img src={backicon} alt="backicon" className="backicon"/></button>

                    <h1>
                        What is your name?
                    </h1>

                    <input onKeyDown={(e)=>{enterListen(e)}} onChange={(e)=>{changer(e.target.value)}} type="text" placeholder="Your Name"/>

                    <button className="hiddenBut" id="NAMEBUTT" onClick={nextQ}>NEXT</button>

                </div>
            <FooterComp />
        </>
    )
}