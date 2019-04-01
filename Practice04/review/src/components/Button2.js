
import React from 'react'
export default ({ onClick, text, id}) => {
  return <button onClick={onClick} id={id} >{text}</button>;
}

