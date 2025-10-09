import React, { useState } from 'react'

function PageStatus({ status }) {
  let content;

    switch (status) {
      case "loading":
        content = <p>Loading . . .</p>
        break;
      case "success":
        content = <p>Sukses!</p>
        break;
      case "error":
        content = <p>Terjadi kesalahan, coba lagi nanti</p>
        break;
      default:
        content = <p>Status tidak diketahui</p>
        break;
    }
  return content
}

function App() {
    const [ dataStatus, setDataStatus] = React.useState('loading')

    const changeStatus = () => {
      const statuses = ['loading', 'success', 'error', 'unknown']
      const currentIndex = statuses.indexOf(dataStatus)
      const nextIndex = (currentIndex + 1) % statuses.length
      setDataStatus(statuses[nextIndex])
    }

    return (
      <div className='container'>
        <h2>Conditional Rendering dengan Switch Statement</h2>
        <h3>Status :</h3>
        <PageStatus status={dataStatus}/>
        <button onClick={changeStatus}>Ubah Status</button>
      </div>
    ) 
}

export default App
