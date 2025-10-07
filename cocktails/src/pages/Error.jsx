import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='errot-pagr section'>
      <div className='error-container'>

        <h1>oops! it's a dead error</h1>
        <Link to='/' className='btn btn-primary'>
        Back Home</Link>
      </div>
    </section>
  )
}

export default Error