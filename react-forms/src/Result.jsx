import React from 'react'
import { useLocation } from "react-router-dom";
function Result() {
    const location=useLocation();
    const {formData}=location.state || {};

    if(!formData){
        return <p>no data</p>
    }

  return (
    

    <div>

<h1>Data</h1>
<p>Emri: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Mosha: {formData.age}</p>
    </div>
  )
}

export default Result