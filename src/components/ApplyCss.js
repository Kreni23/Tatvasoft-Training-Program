import React from 'react'
import './myStylesheet.css'

function ApplyCss(props) {
    let className=props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={className}>Jay Shree Ram</h1>
    </div>
  )
}

export default ApplyCss
