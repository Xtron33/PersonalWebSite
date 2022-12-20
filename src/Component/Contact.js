import React, {useState, useRef, Suspense} from 'react';
import Sculpture34 from "../Assets/Sculpter/34.png"
import TV from "../Assets/TV.png"
import TG from "../Assets/icon/telegrem.png"
import Email from "../Assets/icon/mail.png"
import VK from "../Assets/icon/vk.png"
import Discord from "../Assets/icon/discord.png"

export const Contact = () => {



    return(
        <>
            <div className="contact-container">
                <div className="contact-container-iframe h2">
                        <span>&lt;/</span>
                        <span className="c_g">iframe src=”./contact/space.fbx”</span>
                        <span>&gt;</span>
                </div>
                <div className="contact-container-TV-container">
                    <img src={TV} className="contact-container-TV-container-overlay"/>
                    <div className="contact-container-TV-container-links-container">
                        <a href="https://t.me/Xtron33" target="_blank"><img className="contact-container-TV-container-links-container-links telegram" src={TG}/></a>
                        <a href="mailto:xtron_uk@yahoo.com" target="_blank"><img className="contact-container-TV-container-links-container-links email" src={Email}/></a>
                        <a href="https://vk.com/xtron_uk" target="_blank"><img className="contact-container-TV-container-links-container-links vk" src={VK}/></a>
                        <a href="https://discord.com/users/227006208735707136/" target="_blank"><img className="contact-container-TV-container-links-container-links discord" src={Discord}/></a>
                    </div>
                </div>

                <img src={Sculpture34} className="contact-container-sculpture"/>
            </div>
        </>
    )
}