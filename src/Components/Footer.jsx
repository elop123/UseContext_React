import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import s from '../style/Footer.module.scss'
import { NotificationContext } from "../context/Notification";

export const Footer = () =>{
    const{changeTheme, isDarkMode} = useContext(ThemeContext)
    const { toastNotification } = useContext(NotificationContext);

    return(
    <>
    <footer className={isDarkMode? s.footerDark: s.footerLight}>
        <div >
    
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
    </ul>
        </div>
        <div>
            <p>Addresse:Storegade 1</p>
            <p> 9220 Aalborg</p>
        </div>
        <div>
            <h4>Sign up for news:</h4>
            <input type="text" placeholder="write your email" />
            <div className={s.buttonStyle}>
            <button onClick={toastNotification}>Sign up!</button>
    </div>
        </div>
    </footer>
    </>)
}