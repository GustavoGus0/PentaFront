import logo from "../../assets/img/Logo.png";
import '../Components.scss';

export default function Header(){

    return(
        <>
            <header>
                <img src={logo} alt="PentaPulse Logo" />
                <nav>
                    <a href="#">Главная</a>
                    <a href="#">О команде</a>
                    <a href="#">Контакты</a>
                </nav>
            </header>
        </>
    );
}