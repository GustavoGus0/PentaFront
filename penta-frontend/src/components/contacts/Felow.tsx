import { motion } from 'framer-motion'
import tgIcon from "../../assets/img/tg.svg"
import vkIcon from "../../assets/img/vk.svg"
import { fadeInOut } from '../Main';

export default function Felow({ felow, index }: any){

    return(
        <>
            <motion.div
            initial={fadeInOut[0]}
            animate={fadeInOut[1]}
            transition={{
                delay: index/7
            }}
            className="felow-item"
            >
                <div className="img-block">
                    <img src={felow.picture} alt="Profile picture" />
                </div>
                <h3>{felow.nickname}</h3>
                <p>{felow.status}</p>
                <div className="link-box">
                    { felow.tglink &&
                    <a href={felow.tglink} target='_blank'>
                        <img src={tgIcon} alt="" />
                    </a>
                    }
                    { felow.vklink &&
                    <a href={felow.vklink} target='_blank'>
                        <img src={vkIcon} alt="" />
                    </a>
                    }
                </div>
            </motion.div>
        </>
    );
}