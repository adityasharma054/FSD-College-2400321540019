import React, { useRef } from 'react'

function MyFunction() {
  const box = useRef(0);

  const update = () => {
    box.current = 1000;
    console.log("Updated value:", box.current);
  }

  return (
    <div>
      <button onClick={update}>Update</button>
    </div>
  )
}

export default MyFunction