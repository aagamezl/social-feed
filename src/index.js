import React from 'react'
import ReactDOM from 'react-dom'

import SocialFeed from './social-feed/SocialFeed'

const url = 'https://api.massrelevance.com/MassRelDemo/kindle.json?limit={limit}'

ReactDOM.render(
  <SocialFeed url={url} limit={8} interval={2000} />,
  document.getElementById('app')
)

module.hot.accept();
