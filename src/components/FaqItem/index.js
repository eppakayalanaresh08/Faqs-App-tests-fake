import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {clickOffButton: false}
  }

  onClickTextDisplayed = () => {
    this.setState(prevState => {
      const {clickOffButton} = prevState
      return {
        clickOffButton: !clickOffButton,
      }
    })
  }

  render() {
    const {clickOffButton} = this.state
    const {eachObjectList} = this.props
    const {questionText, answerText} = eachObjectList
    const urlImage = clickOffButton
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altImage = clickOffButton ? 'minus' : 'plus'
    return (
      <li className="list-border">
        <div className="container-button">
          <h1 className="questionText-heading">{questionText}</h1>
          <button
            type="button"
            onClick={this.onClickTextDisplayed}
            className="button-display"
          >
            <img src={urlImage} alt={altImage} />
          </button>
        </div>
        {clickOffButton && <hr className="line-border" />}
        <p className="text-answerText">{clickOffButton && answerText}</p>
      </li>
    )
  }
}

export default FaqItem
