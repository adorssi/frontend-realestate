import React from 'react';

function Badge(props) {
  return (
    <span className='operation tag'>
        <p>{ props.text }</p>
    </span>
  )
}

export default Badge;