

import React, { useState } from 'react';

function Lista({ tareas, onDeleteTarea, onEditTarea, setTareas }) {
  const [tareaEditando, setTareaEditando] = useState(-1);
  const [camposCompletos, setCamposCompletos] = useState(false);

  const handleEditarClick = (index) => {
    setTareaEditando(index);
  };

  const handleGuardarClick = (index, tareaActualizada) => {
    onEditTarea(index, tareaActualizada);
    setTareaEditando(-1);
    setTareas(tareas); // actualiza el estado de tareas para renderizar la lista con la tarea modificada
  };

  const handleTituloChange = (event, tarea) => {
    setCamposCompletos(event.target.value && tarea.descripcion);
  };

  const handleDescripcionChange = (event, tarea) => {
    setCamposCompletos(tarea.titulo && event.target.value);
  };

  return (
    <div className="tareas-container">
      {tareas.map((tarea, index) => (
        <div key={index}>
          {tareaEditando === index ? (
            <div>
              <p className='primer-campo-edicion'>
                modificar
                <input className='entrada-datos-modificacion'
                  type="text"
                  value={tarea.titulo}
                  onChange={(event) => {
                    onEditTarea(index, {
                      ...tarea,
                      titulo: event.target.value,
                    });
                    handleTituloChange(event, tarea);
                  }}
                />
              </p>
              <br />
              <p className='segundo-campo-edicion'>
                Desacordar
                <input className='entrada-datos-modificacion'
                  value={tarea.descripcion}
                  onChange={(event) => {
                    onEditTarea(index, {
                      ...tarea,
                      descripcion: event.target.value,
                    });
                    handleDescripcionChange(event, tarea);
                  }}
                />
              </p>
              <br />
              <button className='form-button'
                onClick={() =>
                  camposCompletos &&
                  handleGuardarClick(index, tarea)
                }
              >
                Guardar
              </button>
            </div>
          ) : (
            <div>
              <h2>{tarea.titulo}</h2>
              <p>{tarea.descripcion}</p>
              <button className='form-button' onClick={() => onDeleteTarea(index)}>Eliminar</button>
              <button className="editar-button" onClick={() => handleEditarClick(index)}>Editar</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lista;