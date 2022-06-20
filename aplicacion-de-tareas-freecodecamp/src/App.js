import './App.css';
import ListaDeTareas from './componentes/listaDeTareas/ListaDeTareas.jsx';
import Logo from './componentes/logo/Logo.jsx';
//import Tarea from './componentes/tarea/Tarea.jsx';


function App() {
    return (
        <div className="Aplicacion-tareas">
            <Logo />
            <div className="tareas-lista-principal">
                <h1>Mis tareas</h1>
                <ListaDeTareas />
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
