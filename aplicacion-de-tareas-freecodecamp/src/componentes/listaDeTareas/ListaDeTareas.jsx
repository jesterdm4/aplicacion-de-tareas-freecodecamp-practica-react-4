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

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {//no entioendo esto de igual al id, cual id?
                tarea.completada = !tarea.completada;
            }

            return tarea;

        });
         setTareas(tareasActualizadas);
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
                            key={tarea.id} //que significa el valor key??
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea ={eliminarTarea}//porque esto debe asignarse como prop? es esto un callback?
                            completarTarea ={completarTarea}//porque esto debe asignarse como prop? es esto un callback?
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