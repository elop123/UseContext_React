import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeContextProvider = (props) =>{
    const  [isDarkMode, setIsDarkMode] = useState(false)

    const changeTheme= ()=>{
        if(isDarkMode){
            setIsDarkMode(false)
        }else{
            setIsDarkMode(true)
        }
    }

return(
    <ThemeContext.Provider value ={{isDarkMode, changeTheme}}>
    {props.children}
    </ThemeContext.Provider>
)
}