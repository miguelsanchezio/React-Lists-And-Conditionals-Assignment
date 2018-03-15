import React from 'react';

const ValidationComponent = props => {
  const textLength = props.textLength;

  let textLengthMsg = null;
  if(textLength < 5) {
    textLengthMsg = 'Text length too short.'
  } else if(textLength > 12) {
    textLengthMsg = 'Text length too long.'
  }

  return (
    <p>{textLengthMsg}</p>
  )
}

export default ValidationComponent;