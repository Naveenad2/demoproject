import React, { useState } from 'react'

function Cart() {

    var [number, setNumber] = useState(9)


    function clickFunction(){
       setNumber(0)
    }
  return (
    <div>
        <h2>cart</h2>

        <h3>{number}</h3>
        <button onClick={clickFunction}>click me</button>
        <div>
        
        </div>
    </div>
   
  )
}




export default Cart