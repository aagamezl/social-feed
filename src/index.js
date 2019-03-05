import React from 'react'
import ReactDOM from 'react-dom'

import ErrorBoundary from './ErrorBoundary'
import SocialFeed from './social-feed/SocialFeed'
import { feedParams } from './constants'

const { url, limit, interval } = feedParams

ReactDOM.render(
  <ErrorBoundary>
    <SocialFeed url={url} limit={limit} interval={interval} />
  </ErrorBoundary>,
  document.getElementById('app')
)
