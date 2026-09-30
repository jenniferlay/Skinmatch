import FooterComp from "../../components/FooterComp";
import HeaderComponent from "../../components/header";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/quizTile.css"
import { useEffect, useState } from "react";
import backicon from "/backicon.png"

export default function QuizPageConcern(){
    let stateinfo = useLocation().state
    const [concernArray, setConcernArray] = useState([])
    const Nav = useNavigate()

    useEffect(()=>{
        const classes = document.getElementById("NAMEBUTT").classList
        if(concernArray.length > 0 && !classes.contains("afterChange")){
            document.getElementById("NAMEBUTT").classList.add("afterChange")
        }

        else if (concernArray.length == 0){
            document.getElementById("NAMEBUTT").classList.remove("afterChange")
        }        
    }, [concernArray])


    function nextQ(){
        if(concernArray.length == 0){
            return
        }
        stateinfo.concern = concernArray
        Nav("/quiz/age", {state: stateinfo})
    }

    function back(){
        Nav("/quiz/sensitive", {state: {
            name: stateinfo.name,
            skin: stateinfo.skin
        }})
        return
    }

    function addToConcerns(concern, event){
        let classes = event.currentTarget.classList

        if(classes.contains("afterClickConcern")){
            setConcernArray((prev)=> prev.filter(each => each != concern))
            classes.remove("afterClickConcern")
        }

        else if(concernArray.length < 3){
                setConcernArray((prev) => [...prev, concern])
                classes.add("afterClickConcern")
        }

    }


    return(
        <>
            <HeaderComponent />
            <div className="quizName">
                <button className="backButton" id="backbutt" onClick={back}>
                <img src={backicon} alt="backicon" className="backicon"/></button>
                <h1>What are your skin concerns?</h1>
                <h4>Pick a maximum of three</h4>
                
                <div className="concernTiles">

                    <button onClick={(e)=>{addToConcerns("Pores", e)}} className="skinTile concernTileBut">
                            <img src="https://static.thenounproject.com/png/395199-200.png" alt="" />
                            <h4>Pores</h4>
                    </button>

                    <button onClick={(e)=>{addToConcerns("Dryness", e)}} className="skinTile concernTileBut">
                            <img src="https://cdn-icons-png.flaticon.com/512/101/101890.png" alt="" />
                            <h4>Dryness</h4>
                    </button>

                    <button onClick={(e)=>{addToConcerns("Oiliness", e)}} className="skinTile concernTileBut">
                            <img src="https://cdn-icons-png.flaticon.com/512/3238/3238649.png" alt="" />
                            <h4>Oiliness</h4>
                    </button>

                    <button onClick={(e)=>{addToConcerns("Redness", e)}} className="skinTile concernTileBut">
                            <img src="https://cdn-icons-png.flaticon.com/512/5501/5501047.png" alt="" />
                            <h4>Redness</h4>
                    </button>

                    <button onClick={(e)=>{addToConcerns("Fine%20linesWrinkles", e)}} className="skinTile concernTileBut">
                            <img src="https://cdn-icons-png.flaticon.com/512/1842/1842163.png" alt="" />
                            <h4>Fine Lines/Wrinkles</h4>
                    </button>

                    <button onClick={(e)=>{addToConcerns("Uneven%20texture", e)}} className="skinTile concernTileBut">
                            <img src="https://cdn-icons-png.flaticon.com/512/3884/3884278.png" alt="" />
                            <h4>Uneven Skin</h4>
                    </button>

                </div>

                <button onClick={nextQ} className="hiddenBut margBotConcern" id="NAMEBUTT">NEXT</button>
                
            </div>
            <FooterComp />        
        </>
    )
}