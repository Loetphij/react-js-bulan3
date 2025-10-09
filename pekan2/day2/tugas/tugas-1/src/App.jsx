import { useState } from 'react'


function App() {
  const UserGreeting = () => {
    return (
      <>
        <h3>Selamat Datang kembali!</h3>
        <p>*isLoggedIn = true</p>
      </>
    )
  }

  const GuestGreeting = () => {
    return (
      <>
        <h3>Silahkan login terlebih dahulu</h3>
        <p>*isLoggedIn = false</p>
      </>
    )
  }

  const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
      return UserGreeting()
    } else {
      return GuestGreeting()
    }
  }
  return (
    <>
      <h2>Conditional Rendering if/else</h2>
      <div className='container'>
        <Greeting isLoggedIn={true}/>
        <Greeting isLoggedIn={false}/>
      </div>

    </>
  )
}

export default App
