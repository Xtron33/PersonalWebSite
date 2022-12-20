import React, {useState, useRef} from 'react';
import Sculpture06 from "../Assets/Sculpter/06.png"
import PersonalWeb from "../Assets/WorksImage/personalwebsite.png"
import AuditSafe from "../Assets/WorksImage/auditsafe.png"

export const MyWorksPage = () => {



    return(
        <>
            <div className="works-container">
                <div className="works-container-page-name">
                    <div className=""></div>
                    <div className="h2">
                        <span >&lt;</span>
                        <span className="c_g">h2</span>
                        <span>&gt;</span>
                    </div>
                    <div className="works-container-page-name-text">MY WORKS</div>
                    <div className="h2">
                        <span >&lt;/</span>
                        <span className="c_g">h2</span>
                        <span>&gt;</span>
                    </div>
                    <div className="brush"></div>
                </div>
                <div className="works-container-list-container">
                    <div className="works-container-list-container-item">
                        <a href="https://github.com/Xtron33/BoardGameBar" target="_blank"><div className="works-container-list-container-item-image"></div></a>
                        <div className="works-container-list-container-item-text align-rigth">
                            <div className="works-container-list-container-item-text-main">
                                <div className="h2">
                                    <span >&lt;</span>
                                    <span className="c_g">h3</span>
                                    <span>&gt;</span>
                                </div>
                                <div className="works-container-list-container-item-text-main-text">BOARDGAME<br/>BAR</div>
                                <div className="h2">
                                    <span >&lt;/</span>
                                    <span className="c_g">h3</span>
                                    <span>&gt;</span>
                                </div>
                            </div>
                            <div className="works-container-list-container-item-text-sub">
                                <div className="h2" style={{alignSelf: "flex-start"}}>
                                    <span >&lt;</span>
                                    <span className="c_g">h4</span>
                                    <span>&gt;</span>
                                </div>
                                <div className="works-container-list-container-item-text-sub-text">Course work. Table games e-shop.
                                    <br/>Design and development</div>
                                <div className="h2" style={{alignSelf: "flex-end", margin: "120px 0px 0px 0px"}}>
                                    <span >&lt;/</span>
                                    <span className="c_g">h4</span>
                                    <span>&gt;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="works-container-list-container-item">
                        <div className="works-container-list-container-item-text align-left">
                            <div className="works-container-list-container-item-text-main">
                                <div className="h2">
                                    <span >&lt;</span>
                                    <span className="c_g">h3</span>
                                    <span>&gt;</span>
                                </div>
                                <div className="works-container-list-container-item-text-main-text">PERSONAL<br/>PORTFOLIO SITE</div>
                                <div className="h2">
                                    <span >&lt;/</span>
                                    <span className="c_g">h3</span>
                                    <span>&gt;</span>
                                </div>
                            </div>
                            <div className="works-container-list-container-item-text-sub">
                                <div className="h2" style={{alignSelf: "flex-start"}}>
                                    <span >&lt;</span>
                                    <span className="c_g">h4</span>
                                    <span>&gt;</span>
                                </div>
                                <div className="works-container-list-container-item-text-sub-text">Personal work. Portfilio and CV site.
                                    <br/>Design and development</div>
                                <div className="h2" style={{alignSelf: "flex-end", margin: "120px 0px 0px 0px"}}>
                                    <span >&lt;/</span>
                                    <span className="c_g">h4</span>
                                    <span>&gt;</span>
                                </div>
                            </div>
                        </div>
                        <a href="https://github.com/Xtron33/PersonalWebSite" target="_blank"><div className="works-container-list-container-item-image" style={{backgroundImage: `url("${PersonalWeb}")`, animationDelay: "2.5s"}}></div></a>
                    </div>
                    <div className="works-container-list-container-item">
                        <a href="https://github.com/Xtron33/AuditSafe" target="_blank"><div className="works-container-list-container-item-image" style={{backgroundImage: `url("${AuditSafe}")`, animationDelay: "4s"}}></div></a>
                        <div className="works-container-list-container-item-text align-rigth" style={{ animationDelay: "4.5s"}}>
                            <div className="works-container-list-container-item-text-main">
                                <div className="h2">
                                    <span >&lt;</span>
                                    <span className="c_g">h3</span>
                                    <span>&gt;</span>
                                </div>
                                <div className="works-container-list-container-item-text-main-text">IN PROGRESS: <br/>AUDIT SAFE</div>
                                <div className="h2">
                                    <span >&lt;/</span>
                                    <span className="c_g">h3</span>
                                    <span>&gt;</span>
                                </div>
                            </div>
                            <div className="works-container-list-container-item-text-sub">
                                <div className="h2" style={{alignSelf: "flex-start"}}>
                                    <span >&lt;</span>
                                    <span className="c_g">h4</span>
                                    <span>&gt;</span>
                                </div>
                                <div className="works-container-list-container-item-text-sub-text">Course work. System audit checker.
                                    <br/>Design and development</div>
                                <div className="h2" style={{alignSelf: "flex-end", margin: "120px 0px 0px 0px"}}>
                                    <span >&lt;/</span>
                                    <span className="c_g">h4</span>
                                    <span>&gt;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="works-container-arrow"></div>
                <img className="works-container-bg-sculpter" src={Sculpture06}/>
            </div>
        </>

    )
}