import './App.css'
import {Route, Routes} from 'react-router-dom'
import {Oppgave1} from './oppgaver/oppgave_1.tsx'
import {Forside} from "./Forside.tsx";

const App =() => {
    return (<>
        <Routes>
            <Route path="/" element={<Forside/>}/>
            <Route path="/oppgaver/1/" element={<Oppgave1/>}/>
        </Routes>
    </>)
}


export default App
