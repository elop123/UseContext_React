import { createContext, useState } from "react"

export const NotificationContext = createContext()


export function NotificationProvider(props){
  const[notification, setNotification] = useState(false);

    const toastNotification =()=>{
     
            setNotification(true)
            setTimeout(() => {
                setNotification(false); // Hide notification after  2 seconds
              }, 2000);
            };
  
  return(
        <>
        <NotificationContext.Provider value ={{notification, toastNotification}}>
         {props.children}
        </NotificationContext.Provider>
        </>
    )
}