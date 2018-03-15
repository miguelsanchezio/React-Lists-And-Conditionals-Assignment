import React from 'react';

const ValidationComponent = props => {
  const textLength = props.textLength;

  let textLengthMsg = null;
  if(textLength <= 5) {
    textLengthMsg = 'Text length is too short.'
  } else {
    textLengthMsg = 'Text is long enough.'
  }

  return (
    <div>
      <p>{textLengthMsg}</p>
    </div>
  )
}

export default ValidationComponent;