import React from 'react'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <>
        <div className="flex justify-center flex-col">
          <div className="typewriter linear-wipe text-6xl ml-20 font-dohyeon">
            김병철
          </div>
          <div className="text-white text-xl font-dohyeon flex justify-self-center">
            지극히 평범한 <div className="typewriter">코딩하는</div> 중학생
          </div>
        </div>
      </>
    )
  }
}

export default App
