// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '@scss/global.scss';

function Header(){
    return(
        <header>
        <h1>Dev Lô</h1>
        <nav>
            <ul>
                <li>Sobre mim</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </nav>
        <hr/>
    </header>
    )
}

export default Header