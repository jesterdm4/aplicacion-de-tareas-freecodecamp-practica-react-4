import './App.css';
import Logo from './componentes/logo/Logo.jsx';
import Tarea from './componentes/tarea/Tarea.jsx';
//tratar de convertir tarea-lista-principal en un componente

function App() {
    return (
        <div className="Aplicacion-tareas">
            <Logo />
            <div className="tareas-lista-principal">
                <h1>Mis tareas</h1>
                <Tarea texto="Hacer el curso de React" />
            </div>
        </div>
    );
}

/*
el prettier.jason tenia escrito lo siguiente:

{
    "trailingComma": "none",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true
}

*/

export default App;
