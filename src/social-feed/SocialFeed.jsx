import React, { Component } from 'react'

import styled from 'styled-components'

import Loading from './../Loading'
import Post from './Post'

const getData = async (url, limit) => {
  const feed = await request(url, limit)

  this.setState({
    feed
  });
}

const Container = styled.section`
  @media (min-width: 1281px) {
    display : flex;
    flex-wrap: wrap;
  }
`;

const request = async (url, limit) => {
  const response = await fetch(url.replace('{limit}', limit))
  const json = await response.json()

  return json
}

class SocialFeed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: []
    }
  }
  componentDidMount() {
    this.interval = setInterval(async () => {
      this.getData()
    }, this.props.interval)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  async getData () {
    const feed = await request(this.props.url, this.props.limit)
  
    this.setState({
      feed
    });
  }
  renderPost () {
    return this.state.feed.map((item, index) => {
      return <Post
        key={item.id}
        index={index}
        date={item.created_at}
        author={item.user.name}
        message={item.text}
      />
    })
  }
  render () {
    return (
      <Container>
        {
          this.state.feed.length === 0 ? <Loading /> : this.renderPost()
        }
      </Container>
    )
  }
}

export default SocialFeed
