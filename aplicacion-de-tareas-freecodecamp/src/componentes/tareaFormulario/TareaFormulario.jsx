import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./TareaFormulario.css";

const TareaFormulario = (props) => {

    const [name, setName] = useState("");

    const manejarCambio = (e) => {
        setName(e.target.value);
    }


    const manejarEnvio = (e) => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: name,
            completada: false
        }

        props.addTask(tareaNueva); 
    }

    return (
        <form 
            onSubmit={manejarEnvio} 
            className="tarea-formulario">
            <input 
                className="tarea-input"
                type="text"
                placeholder="Agrega una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar tarea
            </button>
        </form>
    )
};

export default TareaFormulario;