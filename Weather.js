import React from 'react'
import './Weather.css'
const Weather = props => (
<div>
      {props.city &&
        <div className="infoWeath">
         
          <p>Давление:{props.pressure}</p>
          
          <p>Заход солнца:{props.sunset}</p>
        </div>
      }
      <p className="error">{props.error}</p>
    </div>)
 


export default Weather;