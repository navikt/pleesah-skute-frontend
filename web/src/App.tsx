import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import {Oppgave1} from './oppgaver/oppgave_1.tsx'

const Forside = () => {
    return (<>
        <h1>Pleesah Game</h1>
        <Link to="/oppgaver/1/">Start oppgave 1</Link>
    </>)
}

const App =() => {
    return (<>
        <Routes>
            <Route path="/" element={<Forside/>}/>
            <Route path="/oppgaver/1/" element={<Oppgave1/>}/>
        </Routes>
    </>)
}


export default App
