import './Components.scss'
import logo from "../assets/img/Logo.png"
import { motion } from 'framer-motion'

export const fadeInOut = [
    {
        scale: .7,
        opacity: 0,
    },
    {
        scale: 1,
        opacity: 1,
    }
]

export default function Main(){

    let countProjects = "50+";

    const whatYouGet = [
        `Проекты, которыми пользуются: ${countProjects}`,
        "Сложные и интересные задачи",
        "Бесплатная практика на реальных проектах"
    ]

    return(
        <>
            <motion.div
            className="main-page"
            initial={fadeInOut[0]}
            animate={fadeInOut[1]}
            exit={fadeInOut[0]}
            >
                <div className="big-card">
                    <div className="blur-circle"></div>
                    <img src={logo} alt="PentaPulse Logo" />
                    <div className="text-box">
                        <h2>PentaPulse</h2>
                        <p>IT-команда</p>
                    </div>
                </div>

                <motion.h3 
                style={{marginLeft: "2rem"}}
                initial={fadeInOut[0]}
                animate={fadeInOut[1]}
                transition={{
                    delay: 0.2
                }}


                >От нас:</motion.h3>

                <div className="cardholder">
                    {whatYouGet.map((e, i) => 
                        <motion.div
                        key={i}
                        className="card"
                        initial={fadeInOut[0]}
                        animate={fadeInOut[1]}
                        transition={{
                            delay: whatYouGet.length < 10 ? 0.3 + i/7 : 0.1 + i/12
                        }}
                        >
                            <h4>{e}</h4>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </>
    );
}