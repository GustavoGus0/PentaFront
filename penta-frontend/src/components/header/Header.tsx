import logo from "../../assets/img/Logo.png";
import '../Components.scss';
import { Link } from 'react-router-dom';

export default function Header(){

    return(
        <>
            <header>
                <img src={logo} alt="PentaPulse Logo" />
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/about">О команде</Link>
                    <Link to="/contacts">Контакты</Link>
                </nav>
            </header>
        </>
    );
}