import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'


const Image = styled.img`
  width: 100%;
  height: auto;
`
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const API_URL = 'https://api.thecatapi.com/v1/images/search?breed_id=abys'
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })

  }
  static getDerivedStateFromProps(props, state) {
    return { firstName: props.firstName }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  renderCats = () => {
    return this.state.data.map(({ id, url}) => {
      return (
        <div key={id}>
          <Image src={url}></Image>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='App'>{this.renderCats()}</div>
      )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
