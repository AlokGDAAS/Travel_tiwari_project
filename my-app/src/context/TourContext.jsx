import { createContext, useContext, useEffect } from "react";

const TourContext = createContext()


export const TourProvider = ({children})=>{

   const value = {name:"alok"}

    return(
        <TourContext.Provider value={value}>
             {children}
        </TourContext.Provider>
    )
}

export const useTour =()=> useContext(TourContext)