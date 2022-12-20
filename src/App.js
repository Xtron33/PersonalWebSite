import React, {useState, useEffect, useRef} from 'react';

import './style/Main.scss'
import {Loader} from "./Component/Loader"
import {Main} from "./Component/MainPage"
import {Header} from "./Component/header"
import {AboutPage} from "./Component/AboutPage"
import {MyWorksPage} from "./Component/WorksPage"
import {Contact} from "./Component/Contact"



const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAbout, setIsAbout] = useState(false);
    const [isWorks, setIsWorks] = useState(false)
    setTimeout(() => setIsLoading(false), 9000);



    const goToAbout = (event) => {
        if(window.scrollY >= (window.innerHeight)*0.1 && !isAbout){
            setIsAbout(true);
        }
        if(window.scrollY >= (window.innerHeight)*1.1 && !isWorks){
            setIsWorks(true);
        }

    }

    useEffect(() => {
        window.addEventListener('scroll' , (event => goToAbout(event)));
    },[])

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
          {
              !isLoading ?

          <main>
              {!isLoading ? <Main/> : <></>}
              {isAbout ? <AboutPage/> : <div style={{height: "90vh"}}></div>}
              {isWorks ? <MyWorksPage/> : <div style={{height: "90vh"}}></div>}
              <Contact/>
          </main>
              : <></>
          }
      </>
  );
}

export default App;
