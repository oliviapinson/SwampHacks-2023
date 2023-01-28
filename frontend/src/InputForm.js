import { useState } from 'react';
import axios from "axios";

const initalInput = {
    name: "",
    year: ""
}

function MyForm() {
  const [inputs, setInputs] = useState(initalInput);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className='inputLine'>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      </div>
      <div className='inputLine'>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.year || ""} 
          onChange={handleChange}
        />
        </label>
    </div>
    <div className='inputLine'>
        <input type="submit" />
    </div>
    </form>
  )
}

export default function InputForm() {
    return (
      <section>
          <MyForm />
      </section>
    );
  }
