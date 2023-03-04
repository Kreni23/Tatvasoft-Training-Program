import React from 'react'

function IndexasKey() {
  const names = ['Kreni', 'Jenish', 'Dev']
  const nameList = names.map((name, index) => <h2 key={index}>
    {index} {name}
  </h2>)

  return(
    <div>{nameList}</div>
  )
}

export default IndexasKey
