import { createContext, useReducer, useState } from "react";


const ResultContext = createContext();

export const ResultProvider = ({children}) => {


  const [amount , setAmount] =  useState("")

  const [interest , setInterest] = useState("")

  const [years , setYears] = useState("")

  const [futureValue , setFutureValue] = useState("")

 
  const calculateSip = () => {

    const r = interest / 100 / 12
    const n = 12 * years
    const sip = amount * ((Math.pow(1 + r , n) - 1) / r) * (1 + r);
    setFutureValue(sip.toFixed(2));
  }


    return(
        <ResultContext.Provider value=
        {{amount , setAmount , interest , setInterest , years , setYears , calculateSip , futureValue ,  setFutureValue}}>
            {children}
        </ResultContext.Provider>
    )
}



export default ResultContext;