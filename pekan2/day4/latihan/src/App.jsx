import React, {useState, useEffect} from "react"
import Fetch from "./compononets/Fetch.jsx"
import Axios from "./compononets/Axios.jsx"
import AbortFetch from "./compononets/AbortFetch.jsx"
import UserListManipulated from "./compononets/UserListManipulated.jsx"

function App() {

  return (
    <>
      <Fetch />
      <hr />
      <Axios />
      <hr />
      <AbortFetch />
      <hr />
      <UserListManipulated />
    </>
  )
}

export default App
