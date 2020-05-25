import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Input = styled.textarea`
  resize: none;
  padding: 8px;
  background-color: var(--mainColor3);
  border:none;
  border-radius: 14px;
  height: 100%;
  width: 100%;
  color: var(--mainColor1);
  outline: none;
  font-size: 0.6em;
  box-sizing: border-box;
  &:focus {
    border: 2px solid var(--mainColor2)
  }
`
const Label = styled.label`
  color: dark grey;
  font-size: 1em;
`

function FastTextInput (props) {
  const handleChange = (event) => props.setText(event.target.value)   
  return (
    <Input type="text" value={props.text} onChange={handleChange} maxLength={`${props.maxLength || 1000}`} />        
  )
}



export default FastTextInput
