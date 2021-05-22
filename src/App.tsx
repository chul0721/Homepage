import React from 'react'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex justify-center flex-col">
          <div className="typewriter linear-wipe text-6xl ml-20 font-dohyeon">
            김병철
          </div>
        </div>
      </>
    )
  }
}

export default App
