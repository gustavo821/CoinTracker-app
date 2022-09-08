import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
  }

function GlobalContext({children}) {
    const [currency,setCurrency] = useState('usd');
    const [symbol, setSymbol] = useState("$"); 

    useEffect(() => {
        if (currency === "usd") setSymbol("$");
        else if (currency === "eur") setSymbol("€");
      }, [currency]); 

    const contextValue = {
        currency,
        setCurrency,
        symbol
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default GlobalContext;