
import React, { useState } from 'react';

function Formulario(props) {
const [tituloTarea, setTituloTarea] = useState("");
const [descripcionTarea, setDescripcionTarea] = useState("");
const [error, setError] = useState(null);
const [disableAddButton, setDisableAddButton] = useState(true);

const handleSubmit = (event) => {
event.preventDefault();
// Validar que los campos de título y descripción no estén vacíos
if (!tituloTarea.trim() || !descripcionTarea.trim()) {
  setError("Por favor ingresa un título y una descripción para la tarea.");
  return;
}

// Llamar a la función onAddTarea y resetear los campos
props.onAddTarea(tituloTarea, descripcionTarea);
setTituloTarea("");
setDescripcionTarea("");
setError(null);
setDisableAddButton(true);
};

const handleInputChange = (event) => {
if (event.target.name === "tituloTarea") {
setTituloTarea(event.target.value);
} else if (event.target.name === "descripcionTarea") {
setDescripcionTarea(event.target.value);
}
if (!tituloTarea.trim() || !descripcionTarea.trim()) {
  setDisableAddButton(true);
} else {
  setDisableAddButton(false);
}};

return (
<form className="formulario-cont" onSubmit={handleSubmit}>
<p className='campo-descriptivo'>
por hacer
<input className='entrada-datos' type="text" name="tituloTarea" value={tituloTarea} onChange={handleInputChange}/>
</p>
<br />
<p className='campo-descriptivo'>
Descripcion
<input className='entrada-datos' name="descripcionTarea" value = {descripcionTarea} onChange={handleInputChange} />
</p>
<br />
{error && <div className='mensaje-error'>{error}</div>}
<button className='form-button' type="submit" disabled={disableAddButton}>Agregar</button>
</form>
);
}

export default Formulario;