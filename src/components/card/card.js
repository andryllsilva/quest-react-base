import React from 'react'
import './card.css'

const Card = (props) =>{
    return(
        <div className='card' style={{textTransform: 'uppercase', color: 'red', fontWeight: 'bold'}}>{props.children}</div>
    )
}

export default Card