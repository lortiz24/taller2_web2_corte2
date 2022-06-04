import { useState } from "react";

const InputName = ({setvaloresBusquedas,arrayData,valoresBusquedas }) => {
  const [valorInput, setvalorInput] = useState('')

  const handleChange = (e) => {
    setvalorInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     
    const existeEnBd=arrayData.filter(item => item.valorBusqueda===valorInput)
    const existeEnBusquedaPrevia=valoresBusquedas.filter(item => item===valorInput)
    if (valorInput.trim().length === 0){
       alert("Digite el nombre del anime")
       return
    };

    if(existeEnBd.length!==0){
      alert('Ya existe en base de datos una busqueda con ese mismo nombre')
      return;
    }

    if (existeEnBusquedaPrevia.length!==0) {
      alert('Ya tiene una busqueda con ese nombre, por favor actualize para borrar historial')
      return
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
