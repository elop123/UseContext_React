import  './App.css'
import { Header } from './Components/Header'
import { Button } from './Components/Button'
import { Gallery } from './Components/Gallery'
import { Footer } from './Components/Footer'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { NotificationProvider } from './context/Notification'
import { Toast } from './Components/Toast'
import s from './style/Button.module.scss'


function App() {
 const{isDarkMode, changeTheme} = useContext(ThemeContext)

  return (
    <NotificationProvider>
    <div className={isDarkMode? s.dark: s.light }>
    <Header title="This is title"/>
    <Button />
    <Gallery />
    <Footer />
    <Toast />
    </div>
    </NotificationProvider>
  )
}

export default App
