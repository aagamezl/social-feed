import React, { Component } from 'react'

import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hasError: false,
      error: null,
      info: null
    }
  }

  componentDidCatch (error, info) {
    this.setState({
      hasError: true,
      error,
      info
    });
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container>
          <h1>Oops, something went wrong :(</h1>
          <details>
            <p>The error: {this.state.error && this.state.error.toString()}</p>
            <p>Where it occured: {this.state.info.componentStack}</p>
          </details>
        </Container>
      )
    }

    return this.props.children
  }
}
