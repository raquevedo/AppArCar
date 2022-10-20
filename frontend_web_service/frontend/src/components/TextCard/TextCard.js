import React from 'react';

function TextCard(props){
  return(
    <div className='card'>
      {props.icon}
      <div className='card-section'>
        <p>
          {props.title}
        </p>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default TextCard;