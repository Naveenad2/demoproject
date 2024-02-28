import React from 'react'

function Homepage() {
let login = false;


let var1 = login? <h1>login success</h1> : <h1>login failed</h1>


  return (


    <div>{var1}</div>
  )
}

export default Homepage