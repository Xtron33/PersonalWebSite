import "../style/LoaderAnimation.scss"


export const Loader = () => {

    const Text = "What's-Up!What's-Up!What's-Up!What's-Up!What's-Up!What's-Up!What's-Up!What's-Up!What's-Up!".split("").map(
        (char, i) =>
            <snan className="Loader-Char" style={{transform: `rotate(${i*4}deg)`}}>{char}</snan>
    )

    const Lines = []
    for(let i =0.05; i<0.3;i+=0.05){
        Lines.push(<p className="Loader-Circle" style={{transform : `scale(${i}) rotate(${i*20}deg)`, zIndex:Math.ceil(i*1000)}}>{Text}</p>)
    }
    for(let i=0.3; i<0.6;i+=0.10){
        Lines.push(<p className="Loader-Circle" style={{transform : `scale(${i}) rotate(${i*20}deg)`, zIndex:Math.ceil(i*1000)}}>{Text}</p>)
    }
    for(let i=0.6; i<0.9;i+=0.15){
        Lines.push(<p className="Loader-Circle" style={{transform : `scale(${i}) rotate(${i*20}deg)`, zIndex:Math.ceil(i*1000)}}>{Text}</p>)
    }
    for(let i=0.9; i<1.5;i+=0.25){
        Lines.push(<p className="Loader-Circle" style={{transform : `scale(${i}) rotate(${i*20}deg)`, zIndex:Math.ceil(i*1000)}}>{Text}</p>)
    }
    for(let i=1.7; i<3 ;i+=0.40){
        Lines.push(<p className="Loader-Circle" style={{transform : `scale(${i}) rotate(${i*20}deg)`, zIndex:Math.ceil(i*1000)}}>{Text}</p>)
    }
    for(let i=3.5; i<6 ;i+=0.80){
        Lines.push(<p className="Loader-Circle" style={{transform : `scale(${i}) rotate(${i*20}deg)`, zIndex:Math.ceil(i*1000)}}>{Text}</p>)
    }
    for(let i=7.1; i<10 ;i+=1.5){
        Lines.push(<p className="Loader-Circle" style={{transform : `scale(${i}) rotate(${i*20}deg)`, zIndex:Math.ceil(i*1000)}}>{Text}</p>)
    }
    for(let i=10.3; i<18 ;i+=2){
        Lines.push(<p className="Loader-Circle" style={{transform : `scale(${i}) rotate(${i*20}deg)`, zIndex:Math.ceil(i*1000)}}>{Text}</p>)
    }



    return(
        <div className="Loader-Clip">
            <div className="Loader">
                {Lines}
            </div>
        </div>
    )
}