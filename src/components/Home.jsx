import React from 'react';
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
    return (
        <>
               <div className="home" id='home'>
            <main>
                <h1>Dummy Text</h1>
                <p>Solution to all your problems</p>
            </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div><p>
                    We are your one and only solution to all your tech problems you face
                    Everyday. We are lending tech company whose aims is to increase the problems solving ability in children.
                </p></div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem labore quasi dolorum sit ex? Consequatur neque, animi vero explicabo obcaecati velit consectetur ipsam? Tempora, totam natus culpa corrupti explicabo maxime.</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillYoutube/>
                            <p>YouTube</p>
                        </div>
                        <div style={{
                            animationDelay: "1s",
                        }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>

            </div>
        </>
    );
}

export default Home