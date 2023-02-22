import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-faqs">FAQs</h1>
          <ul className="items-faqsList">
            {faqsList.map(eachList => (
              <FaqItem eachObjectList={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
