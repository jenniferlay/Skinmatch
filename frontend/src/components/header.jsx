import "../styles/header.css"

export default function HeaderComponent(){

    function onclickNav(){
        const navbar = document.querySelector(".navBarMobile").classList
        const text = document.querySelectorAll(".textOpac")

        if(navbar.contains("showNav")){
            navbar.remove("showNav")

            text.forEach((each)=>{
                each.classList.remove("showTextNav")
            })

        }
        else{
            navbar.add("showNav")
            
            text.forEach((each)=>{
                each.classList.add("showTextNav")
            })
        }
    }

    return(
        <div className="headerWrapper">
            <header>
                <a className="SkinMatch" href="/">SKINMATCH</a>
                <ul>
                    <li> <a className="headerLinks" href="/about">ABOUT</a> </li>
                    <li> <a className="headerLinks" href="/contact">CONTACT</a> </li>
                </ul>

                <button onClick={onclickNav} className="hamburgerIcon">☰</button>

            </header>
            <ul className="navBarMobile">
                <li className="textOpac"><a href="/about">ABOUT</a></li>
                <li className="textOpac"><a href="/contact">CONTACT</a></li>
            </ul>

        </div>
    )

}