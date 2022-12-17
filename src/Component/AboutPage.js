import React, {useState, useRef} from 'react';
import Sculpture10 from "../Assets/Sculpter/10.png"

export const AboutPage = () => {


    const text1 = "At the moment I’m studying information security at TSU. It was here that I decided to connect my life with front-end development after participating in a hackathon."

    return(
        <>
            <div className="about-container">
                <div className="about-container-aboutme-container">
                    <div className="about-container-aboutme-container-page-name">
                        <div className="brush-sixnine"></div>
                        <div className="h2">
                            <span >&lt;</span>
                            <span className="c_g">h2</span>
                            <span>&gt;</span>
                        </div>
                        <div className="about-container-aboutme-container-page-name-text">ABOUT ME</div>
                        <div className="h2">
                            <span >&lt;/</span>
                            <span className="c_g">h2</span>
                            <span>&gt;</span>
                        </div>
                    </div>
                    <div className="about-container-aboutme-container-secondary">
                        <div className="h2">
                            <span >&lt;</span>
                            <span className="c_g">h3</span>
                            <span>&gt;</span>
                        </div>
                        <div className="about-container-aboutme-container-secondary-text">I’m a frontend developer and UX/UI designer<br/> based in Russia, Tula.</div>
                        <div className="h2">
                            <span >&lt;/</span>
                            <span className="c_g">h3</span>
                            <span>&gt;</span>
                        </div>
                    </div>
                    <div className="about-container-aboutme-container-third">
                        <div className="about-container-aboutme-container-third-border">
                            <div className="h2">
                                <span >&lt;</span>
                                <span className="c_g">h4</span>
                                <span>&gt;</span>
                            </div>
                            <div className="about-container-aboutme-container-third-border-line"></div>
                            <div className="h2">
                                <span >&lt;/</span>
                                <span className="c_g">h4</span>
                                <span>&gt;</span>
                            </div>
                        </div>
                        <div className="about-container-aboutme-container-third-text">
                            <p>
                                {text1}
                            </p>
                            <p>
                                And now I'm diligently studying React, Redux Toolkit, and many other exciting technologies. I love solving complex problems, constantly growing as a developer at the same time. To be honest, I forget to eat (despite the fact that I really like to eat), drink, sleep, until the task is solved (well, or I just don’t exhale completely)
                            </p>
                            <p>
                                In addition, I am quite sociable. I like to arrange all sorts of activities, as well as participate in them. Whether it's some kind of volunteering, hackathon, or something similar, if I see that the team lacks a leader, I take on this responsibility and drag the team to success. It's just me and I can't do anything about it.
                            </p>
                        </div>
                    </div>
                    <div className="about-container-aboutme-container-scrolldown"></div>
                </div>
                <div className="about-container-image">
                    <div className="about-container-image-text"></div>
                    <img className="about-container-image-sculpture" src={Sculpture10}/>
                </div>
            </div>
        </>

    )
}

