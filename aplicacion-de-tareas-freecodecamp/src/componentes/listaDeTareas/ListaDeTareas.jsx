import { useState } from 'react';
import TareaFormulario from '../tareaFormulario/TareaFormulario.jsx';
import "./ListaDeTareas.css";
import Tarea from '../tarea/Tarea.jsx';

const ListaDeTareas = (props) => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) { 
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas]; 
            setTareas(tareasActualizadas); 
        }
    }

    return (
        <>
            <TareaFormulario addTask={(tareaNueva) => agregarTarea(tareaNueva)}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) => 
                    {
                        return (
                            <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            />
                        );
                    }
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;