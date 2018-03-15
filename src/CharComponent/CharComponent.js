import React from 'react';

const CharComponent = props => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '5px',
    border: '1px solid #c4c4c4',
    cursor: 'pointer'
  }

  return (
    <div style={style} onClick={props.click}>{props.char}</div>
  )
}

export default CharComponent;