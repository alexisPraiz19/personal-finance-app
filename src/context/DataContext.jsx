import { createContext, useContext, useEffect, useState } from "react"
import { openDDBB } from "../db/factory"

export const DataContext = createContext({});

export default function DataContextProvider({ children }){
    const [data, setData] = useState({});
    
    async function readDDBB_andSetData(){
        const transactions = await openDDBB.onsuccess().readDDBB("transactions", "readonly"),
              budgets      = await openDDBB.onsuccess().readDDBB("budgets", "readonly"),
              pots         = await openDDBB.onsuccess().readDDBB("pots", "readonly"),
              balance      = await openDDBB.onsuccess().readDDBB("balance", "readonly");
        setData({
            transactions, 
            budgets, 
            pots, 
            balance
        })
    }

    useEffect(()=>{ if(openDDBB.readyState == "done") readDDBB_andSetData(); else console.log(openDDBB) }, []);
    
    return(
        <DataContext value={{ data, setData }}>
            { children }
        </DataContext>
    )
}

export const useDataContext = () => useContext(DataContext);