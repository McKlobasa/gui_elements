import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Input = styled.input`
  box-sizing: border-box;
  padding: 3px;
  padding-left: 8px;
  background: none;
  border-radius: 4px;
  height: 100%;
  width: 80%;
  color: #383736;
  outline: none;
  font-size: 0.5em;
  position:relative;
  border: 2px #383736 solid;
  z-index: 1;
  transition: 0.08s ease-in;

  &::before {
    content: "";
    position: absolute;
    background: #383736;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.09s ease-in;
  }
  &: focus:before {
    top: 0px;
  }

  &:focus {
    color: whitesmoke;
    background: #383736;
  }
`
const Label = styled.label`
  color: dark grey;
  font-size: 1em;
`

function FastTextInput (props) {
  const handleChange = (event) => props.setText(event.target.value)   
  return (
    <Input type="text" value={props.text} onChange={handleChange} maxLength={`${props.maxLength || 1000}`}/>        
  )
}



export default FastTextInput
