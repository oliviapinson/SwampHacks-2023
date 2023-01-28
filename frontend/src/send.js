import axios from "axios";
import inputs from './InputForm';

function getData() {
    const nm = inputs.name;
    const yr = inputs.year; 
    
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      setInputs(({
        name: inputs.name,
        year: inputs.year
      }))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
  })}
  
  export default getData;