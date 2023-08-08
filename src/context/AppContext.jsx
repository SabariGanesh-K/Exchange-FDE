'use client'
import React, { useContext, useEffect, useState } from 'react';
import {DATA} from './dtaa'
import { CONVERTER } from './dtaa';
import { usePriceUpdater } from './updater';

export const AppConfig = React.createContext();

export const AppProvider = ({ children }) => {
    // const [datai, setdata] = useState([])
    // const [convert, setConvert] = useState({})
    // useEffect(()=>{
    //     setdata(DATA)
    //     setConvert(CONVERTER)
    // },[])
    const convert = usePriceUpdater(CONVERTER)

    return <AppConfig.Provider value={{convert}}>{children}</AppConfig.Provider>
}

