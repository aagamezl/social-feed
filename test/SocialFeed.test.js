import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';

import SocialFeed from './../src/social-feed/SocialFeed'
import FeedItemsIfHasBeenLoaded from './../src/social-feed/FeedItemsIfHasBeenLoaded'
import { feedParams } from './../src/constants';

const { url, limit, interval } = feedParams
const feed = []

describe('SocialFeed', () => {
  test('should match snapshot', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<SocialFeed url={url} limit={1} interval={interval} />)
    const result = renderer.getRenderOutput();

    expect(result.type.target).toBe('section');
    expect(result.props.children).toEqual(
      <FeedItemsIfHasBeenLoaded feed={feed} />
    );
  })
})
