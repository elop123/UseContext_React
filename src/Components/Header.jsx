import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import s from '../style/Header.module.scss'


export const Header = ({title}) =>{
    const{changeTheme, isDarkMode} = useContext(ThemeContext)
  
    
    return(
    <>
    <h1  className={isDarkMode? s.headerStyleDark: s.headerStyleLight}>{title}</h1>
   
    
    </>)
}