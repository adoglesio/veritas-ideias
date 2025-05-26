import logoAg from "./assets/logoAg.svg"
import "./Header.css"


const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logoAg.svg} alt="logotipo" />
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;