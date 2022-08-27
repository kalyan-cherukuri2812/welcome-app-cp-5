import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  sub = () => {
    this.setState(prev => ({isSubscribed: !prev.isSubscribed}))
  }

  subed = () => {
    this.setState(prev => ({isSubscribed: !prev.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy learning</p>
        {isSubscribed ? (
          <button className="btn" onClick={this.subed} type="button">
            Subscribed
          </button>
        ) : (
          <button className="btn" onClick={this.sub} type="button">
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
