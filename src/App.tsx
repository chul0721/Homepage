import React from 'react'
import $ from 'jquery'

class App extends React.Component {
  public typingBool: any
  public typingIdx: any
  public tyInt: any
  public typingTxt: any

  typing() {
    this.typingTxt = $('.typing-txt').text()
    this.typingTxt = this.typingTxt.split('')
    this.typingIdx = 0
    this.typingBool = false

    if (this.typingBool == false) {
      this.typingBool = true
      this.tyInt = setInterval(this.typing, 100)
    }

    if (this.typingIdx < this.typingTxt.length) {
      $('.typing').append(this.typingTxt[this.typingIdx])
      this.typingIdx++
    } else {
      clearInterval(this.tyInt)
    }
  }

  render() {
    return (
      <>
        <div
          className="text-4xl text-white font-inconsolata"
          onMouseEnter={this.typing()}
        >
          <p className="typing-txt hidden">타이핑될 텍스트 입니다.</p>
          <p className="typing inline-block"></p>
        </div>
      </>
    )
  }
}

export default App
