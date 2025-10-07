import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results", { state: { formData } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Emri:</label>
        <input name="name" value={formData.name} onChange={handleChange} />
      </div>
      <br/>
      <div>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} />
      </div>  <br/>
      <div>
        <label>Mosha:</label>
        <input name="age" value={formData.age} onChange={handleChange} />
      </div>  <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
