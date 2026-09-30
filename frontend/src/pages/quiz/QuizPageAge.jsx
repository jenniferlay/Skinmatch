import FooterComp from "../../components/FooterComp";
import HeaderComponent from "../../components/header";
import { useLocation, useNavigate } from "react-router-dom";
import backicon from "/backicon.png"

export default function QuizPageAge(){
    const Nav = useNavigate()
    let stateInfo = useLocation().state

    function nextQ(age){
        stateInfo.age = age
        Nav("/dashboard", {state: stateInfo})
    }
    
    function back(){
        Nav("/quiz/concern", {state: {
            name: stateInfo.name,
            skin: stateInfo.skin,
            sensitive: stateInfo.sensitive
        }})
        return
    }

    return(
        <>
            <HeaderComponent />
            
            <div className="quizName">
                <button className="backButton" id="backbutt" onClick={back}>
                <img src={backicon} alt="backicon" className="backicon"/></button>
                <h1>What is your age?</h1>

                <div className="ageButtons">
                    <button onClick={()=>{nextQ(18)}}>Under 20</button>
                    <button onClick={()=>{nextQ(21)}}>20s</button>
                    <button onClick={()=>{nextQ(31)}}>30s</button>
                    <button onClick={()=>{nextQ(41)}}>40s</button>
                    <button onClick={()=>{nextQ(51)}}>50+</button>
                </div>


            </div>

            <FooterComp />
        </>
    )
}