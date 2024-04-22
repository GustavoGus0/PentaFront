import Felow from "./Felow";
import qoklaPic from "../../assets/img/qokla.png"
import frogPic from "../../assets/img/frog.png"
import gustavoPic from "../../assets/img/gustavo.png"
import derilPic from "../../assets/img/deril.jpg"
import welfiPic from "../../assets/img/welfi.png"

export default function Contacts(){

    const felows = [
        {
            nickname: "qokla",
            vklink: "https://vk.com/qokla",
            tglink: "https://t.me/qoklass",
            status: "Team Lead",
            picture: qoklaPic,
        },
        {
            nickname: "The frog of dream",
            vklink: "https://vk.com/qqqrdwwqrdeeqrdqwerd",
            tglink: "https://t.me/Tfode",
            status: "Frontend",
            picture: frogPic,
        },
        {
            nickname: "Gustavo",
            vklink: "https://vk.com/mr_yah",
            tglink: "https://t.me/Gus_Ta_Vo",
            status: "Frontend",
            picture: gustavoPic,
        },
        {
            nickname: "Deril",
            tglink: "https://t.me/DerilHH",
            status: "Observer",
            picture: derilPic,
        },
        {
            nickname: "W3lf1",
            vklink: "https://vk.com/i23675449",
            tglink: "https://t.me/Welfi11",
            status: "Designer",
            picture: welfiPic,
        },
    ];
    
    return(
        <>
            <div className="flex-block">
                {felows.map((felow, index) => 
                    <Felow key={index} index={index} felow={felow} />
                )}
            </div>
        </>
    );
}