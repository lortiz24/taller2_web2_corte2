import { useState } from "react";

const InputName = ({setvaloresBusquedas }) => {
  const [valorInput, setvalorInput] = useState('')

  const handleChange = (e) => {
    setvalorInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valorInput.trim().length === 0) return alert("Digite el nombre del anime");

    
    setvaloresBusquedas(lista=>[valorInput,...lista])
    setvalorInput('')
    
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
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
