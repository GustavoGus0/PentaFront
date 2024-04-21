import './Components.scss'
import logo from "../assets/img/Logo.png"

export default function Main(){

    let countProjects = "50+";

    const whatYouGet = [
        `Проекты, которыми пользуются: ${countProjects}`,
        "Сложные и интересные задачи",
        "Бесплатная практика на реальных проектах"
    ]

    return(
        <>
            <div className="main-page">
                <div className="big-card">
                    <div className="blur-circle"></div>
                    <img src={logo} alt="PentaPulse Logo" />
                    <div className="text-box">
                        <h2>PentaPulse</h2>
                        <p>IT-команда</p>
                    </div>
                </div>
                <h3 style={{marginLeft: "2rem"}}>От нас:</h3>
                <div className="cardholder">
                    {whatYouGet.map((e, i) => 
                        <div key={i} className="card">
                            <h4>{e}</h4>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}