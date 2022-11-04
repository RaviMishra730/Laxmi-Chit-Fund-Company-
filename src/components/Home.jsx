import React from 'react';
import totlatiwari from "../assets/totlatiwari.jpg";
import nangbhai from "../assets/nangbhai.jpg";
import kachraseth from "../assets/kachraseth.jpg";
import munnabhai from "../assets/munnabhai.jpg";

// import vg from "../assets/2.webp";
// import {
//     AiFillGoogleCircle,
//     AiFillAmazonCircle,
//     AiFillYoutube,
//     AiFillInstagram,
// } from "react-icons/ai";
const Home = () => {
    return (
        <>
               <div className="home" id='home'>
            <main>
                <h1>25 din mei paisa double</h1>
                <p>Raju Bhai krenge aapki help.....</p>
            </main>
            </div>
            {/* <div className="home2">
                <img src={vg} alt="Graphics" />
                <div><p>
                    Laxmi Chit Fund is a company where you invest your money and we double it within 21 days.
                </p></div>
            </div> */}
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>We are a leading finance company founded in 2006 by <h4>Raju Bhai </h4>
                        Our Founder's vision is to double the money of every needy who is suffering financially <br></br>so, if you also want to double your money then plz fill out the contact form given above. </p>
                    <center><h3>Our Motivation: </h3>Bhai Paisa ho toh kya kuch nhi ho sakta.</center>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Our Investers</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <img src={totlatiwari} alt="totlatiwari" height={60}/>
                            {/* <AiFillGoogleCircle/> */}
                            <p>Totla Tiwari</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            {/* <AiFillAmazonCircle/> */}
                            <img src={nangbhai} alt="totlatiwari" height={80}/>

                            <p>NaN-G Bhai</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            {/* <AiFillYoutube/> */}
                            <img src={kachraseth} alt="totlatiwari" height={90}/>
                            <p>Kachra Seth</p>
                        </div>
                        <div style={{
                            animationDelay: "1s",
                        }}>
                            {/* <AiFillInstagram/> */}
                            <img src={munnabhai} alt="totlatiwari" height={60}/>

                            <p>Munna Bhai</p>
                        </div>
                    </article>
                </div>

            </div>
        </>
    );
}

export default Home