import './Header.css'
import reactLogo from '../../assets/react.svg'

function Header() {
    return(
        <header>
            <h1>To do List React</h1>
             <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </header>
    );
};

export default Header;