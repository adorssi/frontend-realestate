import React from 'react';

function Badge(props) {
  return (
    <span className='tag' style={{backgroundColor: props.bgcolor}} >
        <p style={{color: props.color}}>{ props.text }</p>
    </span>
  )
}

export default Badge;