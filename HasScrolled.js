import React, { Component } from 'react'

export default (ComposedComponent, pixels = 100) => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    this.setState({
      hasScrolled: (window.scrollY > pixels)
    });
  }

  render() {
    return <ComposedComponent {...this.props} hasScrolled={this.state.hasScrolled} />
  }
}
