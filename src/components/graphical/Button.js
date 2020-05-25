import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  position: relative;
  height: fit-content;
  width: fit-content;
  margin: 10px 7px;
  padding: 10px 10px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  color: #383736;
  border: 2px #383736 solid;
  border-radius: 4px;
  outline: none;
  overflow:hidden;
  background: none;
  z-index: 1;
  cursor: pointer;
  transition: 0.08s ease-in;
  
  &::before {
    content: "";
    position: absolute;
    background: #383736;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0px;
    top: 100%;
    z-index: -1;
    transition: top 0.09s ease-in;
  }

  &: hover:before {
    top: 0px;
  }
  &: hover {
    color: whitesmoke;
  }
  &: active {
    transform: translateY(3px);
  }
`
export default Button
