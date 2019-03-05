import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'

import styled from 'styled-components'

import FeedItemsIfHasBeenLoaded from './FeedItemsIfHasBeenLoaded'
import { request } from './../utils'

const Container = styled.section`
  display : block;
  flex-wrap: initial;

  @media (min-width: 1281px) {
    display : flex;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display : flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
  }
`

let intervalHandler

const SocialFeed = ({ url, limit, interval }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    intervalHandler = setInterval(async () => {
      const data = await request(url, limit)

      setFeed(data)
    }, interval)

    return function cleanup() {
      clearInterval(intervalHandler)
    }
  })

  return (
    <Container>
      <FeedItemsIfHasBeenLoaded feed={feed} />
    </Container>
  )
}

SocialFeed.propTypes = {
  url: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
}

export default SocialFeed
