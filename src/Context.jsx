import React, {useState} from 'react'

export const Context = React.createContext()

export default function ContextProvider({children}){
    let [user, setUser] = useState(null)

    return (
      <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
    );
}