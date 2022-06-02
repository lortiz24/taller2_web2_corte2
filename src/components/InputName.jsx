import { useState } from "react";
const InputName = ({ setvaloresBusquedas }) => {
  const [valorBusqueda, setvalorBusqueda] = useState('')

  const handleChange = (e) => {
    setvalorBusqueda(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valorBusqueda.trim().length === 0) return alert("Digite el nombre del anime");

    setvaloresBusquedas((lista => [valorBusqueda, ...lista]))
   
    setvalorBusqueda('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Ingrese el nombre del anime"
        onChange={handleChange}
        value={valorBusqueda}
      />
    </form>
  );
};

export default InputName;
