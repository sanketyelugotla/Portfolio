import React, { createContext, useState } from 'react'
const navContext = createContext();

export default function Context({ children }) {
    const [active, setActive] = useState("");

    return (
        <navContext.Provider value={{ active, setActive }}>
            {children}
        </navContext.Provider>
    )
}

export {
    navContext
}