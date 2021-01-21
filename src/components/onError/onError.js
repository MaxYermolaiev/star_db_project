import React from 'react';
import './onError.css';
import ico from './death-star.png'

let DisplayError = ()=>{
  return(
      <div className="error-indicator">
          <img src={ico} alt="error icon"/>
          <span className="boom">BOOM!</span>
          <span>
        something has gone terribly wrong
      </span>
          <span>
        (but we already sent droids to fix it)
      </span>
      </div>
  )

}

export default DisplayError
