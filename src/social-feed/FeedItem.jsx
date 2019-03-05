import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { formatDate } from '../utils'

const Index = styled.div`
  color: #6c757d;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  right: 10px;
  top: 5px;

  @media (min-width: 1281px) {
    font-size: 16px;
  }
`

const ImgTop = styled.img`
  background-color: #CCCCCC;
  border-style: none;
  border-top-left-radius: .125rem;
  border-top-right-radius: .125rem;
  display: block;
  height: 260px;
  vertical-align: middle;
  width: 100%;

  @media (min-width: 1281px) {
    height: 180px;
  }
`

const CardContainer = styled.div`
  border: 0;
  background-clip: border-box;
  background-color: #FFF;
  border-radius: .125rem;
  border: 1px solid rgba(0,0,0,.12);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
    0 3px 1px -2px rgba(0,0,0,.2),
    0 1px 5px 0 rgba(0,0,0,.12);
  display: flex;
  flex-direction: column;
  font-size: .875rem;
  font-weight: 400;
  margin-bottom: 15px;
  min-width: 0;
  position: relative;
  width: 100%;
  word-wrap: break-word;
  
  @media (min-width: 1281px) {
    margin: 5px;
    width: 18rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 22rem;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 30rem;
  }
`

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  position: relative;
`

const CardTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: .75rem;
  margin-top: 0;
`

const CardSubtitle = styled.h6`
  color: #6c757d;
  font-size: 1rem;
  margin-bottom: .5rem !important;
  margin-top: -.375rem;
`
const CardText = styled.p`
  margin-bottom: 1rem;
  margin-top: 0;
`

const dateFormat = {
  hour12: false,
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
}

const FeedItem = ({ index, item }) => {
  const postDate = formatDate(new Date(item.created_at), dateFormat, 'en-GB')

  return (
    <CardContainer>
      <ImgTop src={"https://imgplaceholder.com/420x320/cccccc/a4b0ff/glyphicon-picture"}></ImgTop>
      <CardBody>
        <Index>{index + 1}</Index>
        <CardTitle>{item.user.name}</CardTitle>
        <CardSubtitle>{postDate}</CardSubtitle> 
        <CardText>{item.text}</CardText>
      </CardBody>
    </CardContainer>
  )
}

FeedItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedItem
