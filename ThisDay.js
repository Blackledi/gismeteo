import React from 'react'
import './ThisDay.css'
const ThisDay = props => (
<div>
      {props.city &&
        <div className="infoDay">
          
          <p className='temp'>{Math.round(props.temp)}°С</p>
          <p className='today'>Сегодня</p>
          <p className='city_thisday'>Город: {props.city}</p>
          
        </div>
        
      }
      
    </div>)
 


export default ThisDay;