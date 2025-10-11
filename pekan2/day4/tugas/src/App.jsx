import { useState } from 'react'
import Axios from './components/Axios.jsx'
import Fetch from './components/Fetch.jsx'
import ManipulatedUserList from './components/ManipulatedUserList.jsx'

function App() {
  return (
    <>
      <div className='container'>
        <h4>No. 1 & 4</h4>
        <Fetch />
      </div>
      <div className='container'>
        <h4>No. 2 & 3</h4>
        <Axios />
      </div>
      <div className='container'>
        <h4>No. 5</h4>
        <ManipulatedUserList />
      </div>
    </>
  )
}

export default App
