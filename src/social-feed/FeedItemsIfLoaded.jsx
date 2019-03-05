import React from "react"
import PropTypes from 'prop-types'

import Loading from '../Loading'
import FeedItem from './FeedItem'

const isEmpty = (value) => {
  return value.length === 0
}

const FeedItemsIfHasBeenLoaded = ({ feed }) => {
  return isEmpty(feed) ? <Loading /> : (
    feed.map((item, index) => {
      // return <FeedItem
      //   key={item.id}
      //   index={index}
      //   date={item.created_at}
      //   author={item.user.name}
      //   message={item.text}
      return <FeedItem
        key={item.id}
        index={index}
        item={item}
      />
    })
  )
}

FeedItemsIfHasBeenLoaded.propTypes = {
  feed: PropTypes.array.isRequired,
}

export default FeedItemsIfHasBeenLoaded
