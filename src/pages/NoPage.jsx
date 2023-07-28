import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <div>
      <hr />
      {/* try to copy error page from site (welcome to the dark side?) */}
        <h1> ** ERROR 404: PAGE NOT FOUND **</h1>
        <p>Got to the <Link to='/'>HOME PAGE</Link></p>
      <hr />
    </div>
  )
}