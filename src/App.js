import React, {useState} from 'react';

import './style/Main.scss'
import {Loader} from "./Component/Loader"
import {Main} from "./Component/MainPage"



const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => setIsLoading(false), 9000);


  return (
      <>
          <div className="noise-effect-container">
              <div className="noise-effect"></div>
          </div>
          {isLoading ? <Loader/> : <></>}
          <div className="background-container">
              <div className="background"></div>
          </div>
          {!isLoading ? <Main/> : <></>}
      </>
  );
}

export default App;
