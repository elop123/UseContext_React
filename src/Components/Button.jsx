import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import s from '../style/Button.module.scss'


export const Button = () =>{
    const { changeTheme, isDarkMode } = useContext(ThemeContext);

    return(
    <div className={s.buttonWrapper}>
   <button onClick={changeTheme}
   className={isDarkMode? s.dark: s.light}>Light/Dark</button>
    </div>)
}