import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image,id,name,info,glass}) => {
  return (
   <article className='coctails'>
    <div className='img-container'>
      <img src ={image} alt={name}/>

    </div>
<div className='coctail-footer'>
  <h3>{name}</h3>
  <h4>{glass}</h4>

  <p>{info}</p>
  <Link to={`/coctail/${id}`} className='btn btn-primary  btm-details'>
  Details
  </Link>
</div>
   </article>
  )
}

export default Cocktail