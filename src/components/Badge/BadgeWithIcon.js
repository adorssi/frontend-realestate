import React from 'react';

function BadgeWithIcon(props) {
  return (
    <span className='operation tag'>
        <p>{ props.text }</p>
    </span>
  )
}

export default BadgeWithIcon;