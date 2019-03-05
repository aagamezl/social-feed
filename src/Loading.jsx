import React from 'react'

import styled from 'styled-components'

import { loaderSize } from './constants'

const Loader = styled.div`
  display: inline-block;
  height: ${loaderSize}px;
  left: calc(50% - ${loaderSize}px / 2);
  position: absolute;
  top: calc(50% - ${loaderSize}px / 2);
  width: ${loaderSize}px;

  &:after {
    content: " ";
    display: block;
    width: ${loaderSize}px;
    height: ${loaderSize}px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #cef;
    border-color: #cef transparent #cef transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loading = () => {
  return (
    <Loader />
  )
}

export default Loading
