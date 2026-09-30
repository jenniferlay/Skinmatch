import "../styles/aboutcomp.css"
import aboutpagepic from "/aboutpagepic.jpg"

export default function AboutPageComp(){
    return (
        <div className="aboutpagecomp">
            <div className="leftAbout">

                    <img src={aboutpagepic} alt="aboutPic" class="aboutpagepic"/>

            </div>

            <div className="rightAbout">

                <h1>ABOUT</h1>

                <p> At SkinMatch, we believe that every skin deserves personalized care. Our mission is to simplify skincare by offering personalized product recommendations tailored to your unique skin type, concerns, and preferences. We’re here to guide you on a journey to healthier, glowing skin by providing expert-backed information, curated product suggestions, and the latest trends in skincare. </p>
                <p>With our dynamic skin quiz, we help you discover the products that best suit your needs, whether you're looking for the perfect cleanser, moisturizer, toner, serum, or sunscreen. Our goal is to empower you to make informed choices, set skincare goals, and stay consistent with your routine. </p>
                <p>Join our community of skincare enthusiasts, and let us help you achieve your skin’s full potential—one step at a time!</p>

            </div>
        </div>
    )
}