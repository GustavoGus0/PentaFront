import { motion } from 'framer-motion'
import { fadeInOut } from '../Main';

export default function About(){

    const aboutUsText = "Мы, — PentaPulse, — команда энтузиастов, объединенных стремлением к созданию уникальных, нужных и важных цифровых продуктов для всех. Наша команда гордится своими профессиональными навыками в области разработки, охватывающими широкий спектр языков программирования. Мы обеспечиваем полный цикл разработки, начиная от анализа требований до тщательного тестирования, обеспечивая надежность и функциональность каждого проекта. Наша цель - не просто создавать решения, а воплощать идеи в жизнь.";
    const aboutUsHeader = "О команде PentaPulse";

    return(
        <>
            <motion.div
            className="about-container"
            initial={fadeInOut[0]}
            animate={fadeInOut[1]}
            exit={fadeInOut[0]}
            >
                <h3>{aboutUsHeader}</h3>
                <p>{aboutUsText}</p>
            </motion.div>
        </>
    );
}