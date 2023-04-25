import React, { useState } from 'react';
import Formulario from './Formulario';
import Lista from './Lista';
import './styles.css';

function App() {
  const [tareas, setTareas] = useState([]);

  const handleAddTarea = (titulo, descripcion) => {
    const newTarea = {
      id: Math.random(),
      titulo: titulo,
      descripcion: descripcion,
    };
    setTareas([...tareas, newTarea]);
  };

  const handleDeleteTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const handleEditTarea = (index, tareaActualizada) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index] = tareaActualizada;
    setTareas(nuevasTareas);
  };

  return (
    <div>
          <header>
  <h1 className='titulo'>
 Prototipo de app React
</h1>
      </header>
   <p className='texto-descriptivo'>
   Aplicacion Tecnica - React.js 
   </p>
      <Formulario onAddTarea={handleAddTarea} />
      <Lista
        tareas={tareas}
        onDeleteTarea={handleDeleteTarea}
        onEditTarea={handleEditTarea}
      />
    </div>
  );
}

export default App;