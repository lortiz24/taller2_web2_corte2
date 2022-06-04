import { useState } from "react";

const InputName = ({setvaloresBusquedas,arrayData }) => {
  const [valorInput, setvalorInput] = useState('')

  const handleChange = (e) => {
    setvalorInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     
    const existe=arrayData.filter(item => item.valorBusqueda===valorInput)
   
    if (valorInput.trim().length === 0){
       alert("Digite el nombre del anime")
       return
    };

    if(existe.length!==0){
      alert('Ya realizo esa busqueda')
      return;
    }

    
    setvaloresBusquedas(lista=>[valorInput,...lista])
    setvalorInput('')
    
  }


  return (
    <form className="form-group"onSubmit={handleSubmit}>
      <input
        className="form-control"
        name="name"
        type="text"
        placeholder="Ingrese el nombre del anime"
        onChange={handleChange}
        value={valorInput}
      />
    </form>
  );
};

export default InputName;
