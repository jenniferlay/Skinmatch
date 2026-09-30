import "../styles/homePageComp.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";

export default function HomeBodyComp(){
    const Nav = useNavigate()

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
          sendVisitMessage();
          localStorage.setItem('hasVisited', 'true');
        }
      }, []);

    function sendToQuiz(){
        Nav("/quiz/name")
    }

    const sendVisitMessage= async()=>{
        console.log("STARTED")
        axios.post("https://rateto-backend.onrender.com/JENNIFER/contact",{
            firstname: "new person",
            lastname: "!!!!",
            email: "blahblah@gmail.com",
            phone: "phone",
            msg: "somebody went on skinmatch"
        }).then((response)=>{
            if (response.data.success == true){
                console.log("Message sent!")
            }
            else{
                console.log(response.data.msg)
            }
        }).catch(()=>{
            console.log("Something went wrong")
        })
    }

    return(
        <div className="homeBodyComp">
            
            <div className="leftHomeComp">
                <h1>
                    Discover your skincare routine
                </h1>

                <p>
                    Get matched by completing our skincare quiz
                </p>

                <button onClick={sendToQuiz} className="button-27">Get Started</button>
            </div>

            <div className="rightHomeComp">
            </div>

        </div>
    )

}