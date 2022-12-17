import React, {useState, useEffect, useRef} from 'react';

import './style/Main.scss'
import {Loader} from "./Component/Loader"
import {Main} from "./Component/MainPage"
import {Header} from "./Component/header"
import {AboutPage} from "./Component/AboutPage"

const App = () => {
    const ref = useRef()


    const [isLoading, setIsLoading] = useState(true);
    const [isAbout, setIsAbout] = useState(false);
    setTimeout(() => setIsLoading(false), 9000);



    const goToAbout = (event) => {
        if(window.scrollY >= (window.innerHeight)*0.2 && !isAbout){
            setIsAbout(true);
        }

    }

    useEffect(() => {
        window.addEventListener('scroll' , (event => goToAbout(event)));
    },[])

    useEffect(() => {
        window.scrollTo({top: (window.innerHeight)*3, behavior:"smooth"})
    }, [isAbout])
  return (
      <>
          {!isLoading ? <Header/> : <></>}
          <div  className="noise-effect-container">
              <div className="noise-effect"></div>
          </div>
          {isLoading ? <Loader/> : <></>}
          <div  className="background-container">
              <div className="background"></div>
          </div>
          <main>
              {!isLoading ? <Main/> : <></>}
              {isAbout ? <AboutPage/> : <div style={{height: "90vh"}}></div>}
          </main>
      </>
  );
}

export default App;
