import { useState } from "react"
import "../styles/contact.css"
import axios from "axios"

export default function ContactPageComp(){
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMSG] = useState("")

    function onSubmit(){
        axios.post("https://rateto-backend.onrender.com/JENNIFER/contact",{
            firstname: first,
            lastname: last,
            email: email,
            phone: phone,
            msg: msg
        }).then((response)=>{
            if (response.data.success == true){
                alert("Message sent!")
            }
            else{
                alert(response.data.msg)
            }
        }).catch(()=>{
            alert("Something went wrong")
        })
    }

    return(
        <div className="ContactComp">
            <div className="leftContact">
                <h1>Contact</h1>
                <p> Get in touch with me at jennierlay@gmail.com and I'll respond as soon as possible!</p>
            </div>

            <div className="rightContact">
                    <div className="inputForm">
                        <div className="inputDiv">
                            <h4>First Name</h4>
                            <input type="text" onChange={(e)=>{setFirst(e.target.value)}}/>
                        </div>

                        <div className="inputDiv">
                            <h4>Last Name</h4>
                            <input type="text" onChange={(e)=>{setLast(e.target.value)}}/>
                        </div>

                    </div>

                    <div className="inputForm">

                        <div className="inputDiv">
                            <h4>Email</h4>
                            <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>

                        <div className="inputDiv">
                            <h4>Phone</h4>
                            <input type="text"onChange={(e)=>{setPhone(e.target.value)}}/>
                        </div>

                    </div>

                    <div className="inputForm">
                        <div className="inputDiv textareaDiv">
                            <h4>Leave us a message</h4>
                            <textarea name="" onChange={(e)=>{setMSG(e.target.value)}}/>
                        </div>

                    </div>

                    <button onClick={onSubmit}>Submit</button>

                </div>
            </div>
    )
}