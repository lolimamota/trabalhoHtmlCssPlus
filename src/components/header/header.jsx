// importação de estilização
import '@scss/global.scss';
import * as S from '@scss/header.module.scss';

function Header() {
    return (
        <>
            <header className={S.classHeader}>
            <h1>Dev Lô</h1>
            <nav>
                <ul>
                    <li>Sobre mim</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
        <hr className={S.classHR}/>
        </>
    )
}

export default Header