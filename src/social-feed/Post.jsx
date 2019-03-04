import React from 'react'

import styled from 'styled-components'

import Section from './Section'

import { formatDate } from './../utils'

// Create a Wrapper component that'll render a <section> tag with some styles
const PostSection = styled.section`
  background-color: #53a1ee;
  color: #FFF;
  border: 1px solid white;
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
  width: 100%;

  @media (min-width: 1281px) {
    width: 33%;
  }
`

const Wrapper = styled.div`
  padding: 1em;
  position: relative;
`

const Index = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  right: 10px;
  top: 5px;
  
  @media (min-width: 1281px) {
    font-size: 22px;
  }
`

const dateFormat = {
  hour12: false,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
}

const Post = (props) => {
  return (
    <PostSection>
      <Wrapper>
        <Index>{props.index + 1}</Index>
        <Section title='Date' content={formatDate(new Date(props.date), dateFormat)}></Section>
        <Section title='Author' content={props.author}></Section>
        <Section title='Message' content={props.message}></Section>
      </Wrapper>
    </PostSection>
  )
}

export default Post
