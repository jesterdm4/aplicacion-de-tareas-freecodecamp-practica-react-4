import React from 'react';
import "./Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ texto }) => {
    return (
        <div className="tarea-contenedor">
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-icono">
                <AiOutlineCloseCircle />
            </div>
        </div>
    );
};

export default Tarea;
