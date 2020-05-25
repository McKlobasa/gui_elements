import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  flex: 1; 
  width: 60px;
  background-color: white; 
  border: none; 
  border-radius: 5px;
  font-size: 0.5em; 
  font-weight: bold;
  color: lightgrey;
  outline: none;
  flex-grow: 1;
  padding: 5px;
  cursor: pointer;
  box-shadow: 15px 28px 14px -25px rgba(0,0,0,0.24);


  &: hover {
    transform: translateY(-2px);
  }
  &: active {
    background-color: var(--mainColor1);
    color: white;
    transform: translateY(0px);
  }
`
export default Button
