import React, { Component } from 'react'
// import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
// import LoaderButton from '../components/LoaderButton'
// import config from '../config'
import './TestComponent.css'

export default class TestComponent extends Component {
  constructor (props) {
    super(props)

    this.file = null

    this.state = {
      isLoading: null,
      content: ''
    }
  }

  validateForm () {
    return this.state.content.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleFileChange = event => {
    this.file = event.target.files[0]
  }

  handleSubmit = async event => {
    event.preventDefault()

    this.setState({ isLoading: true })
  }

  render () {
    return <div className='TestComponent'>...add test component here...</div>
  }
}
