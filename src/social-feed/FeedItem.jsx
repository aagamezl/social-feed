import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Section from './Section'

import { formatDate } from '../utils'

// Create a Wrapper component that'll render a <section> tag with some styles
const Container = styled.section`
  background-color: #53a1ee;
  color: #FFF;
  border: 1px solid white;
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 49%;
  }

  @media (min-width: 1281px) {
    width: 33%;
  }
`

const Item = styled.div`
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

const FeedItem = ({ index, date, author, message }) => {
  const postDate = new Date(date)

  return (
    <Container>
      <Item>
        <Index>{index + 1}</Index>
        <Section title='Date'>
          {formatDate(postDate, dateFormat)}
        </Section>
        <Section title='Author'>
          {author}
        </Section>
        <Section title='Message'>
          {message}
        </Section>
      </Item>
    </Container>
  )
}

FeedItem.propTypes = {
  index: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default FeedItem
