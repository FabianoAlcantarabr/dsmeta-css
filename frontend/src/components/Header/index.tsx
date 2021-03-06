import logo from '../../assets/img/Logo.svg'

import './styles.css'


function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.linkedin.com/in/eng-fabiano-alcantara/">Fabiano Alcantara</a>
                </p>
            </div>
        </header>
    )
}

export default Header
