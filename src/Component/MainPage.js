import React, {useState, useRef} from 'react';
import '../style/Main.scss'



const Arrow50 = () => {
    return(
        <div className="arrow50"></div>
    )
}
const NameBox = () => {
    return(
        <div className="container-hello-namebox-name"></div>
    )
}

const PhotoBox = () => {
    return(
        <div className="container-hello-imagebox-image"></div>
    )
}



export const Main = () =>{
    const [flagArrow50, setFlagArrow50] = useState(false)
    setTimeout(() => setFlagArrow50(true),1000)
    const [flagNameBox, setFlagNameBox] = useState(false)
    setTimeout(() => setFlagNameBox(true),2000)
    const [photoFlag, setPhotoFlag] = useState(false)
    setTimeout(() => setPhotoFlag(true),4300)


    return(
<>


        <div className="container-hello">
            <div className="container-hello-vertical">
                <div className="container-hello-namebox">
                    <div className="container-hello-namebox-border">
                        <div className="container-hello-namebox-border-animation">
                            <div className="h1">
                                <span >&lt;</span>
                                <span className="c_g">h1</span>
                                <span>&gt;</span>
                            </div>
                            <div className="container-hello-namebox-border-line"></div>
                            <div className="h1">
                                <span >&lt;/</span>
                                <span className="c_g">h1</span>
                                <span>&gt;</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {flagArrow50 ? <Arrow50/> : <></>}
                        <div className="container-hello-namebox-hi-im"><span className="container-hello-namebox-hi-im-animation">HI I AM</span></div>
                        {flagNameBox ? <NameBox/> : <></>}
                    </div>
                </div>
                <div className="container-hello-professionbox">
                    <div className="container-hello-professionbox-textbox">
                        <div className="container-hello-professionbox-textbox-animation">FrontEnd Developer<br/>UX/UI Designer</div>

                    </div>
                    <div className="brush-stroke-45"></div>
                    <div className="container-hello-professionbox-border">
                        <div className="h2">
                            <span >&lt;</span>
                            <span className="c_g">h2</span>
                            <span>&gt;</span>
                        </div>
                        <div className="container-hello-professionbox-border-line"></div>
                        <div className="h2">
                            <span >&lt;/</span>
                            <span className="c_g">h2</span>
                            <span>&gt;</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-hello-imagebox">
                <div style={{overflow: "hidden", right: "100px", position: "absolute", height: "50px", width: "400px"}}>
                    <div className="h2 image-h2">
                        <span >&lt;</span>
                        <span className="c_g">img src="./xtron.jpg"</span>
                        <span>/&gt;</span>
                    </div>
                </div>
                {photoFlag ? <PhotoBox/> : <></>}
                <div className="container-hello-imagebox-border"></div>
            </div>
            <div className="container-hello-scroll-down"><span className="container-hello-scroll-down-animation">SCROLL DOWN</span></div>
        </div>

    
</>
    )
}
