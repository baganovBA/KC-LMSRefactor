import React from "react"

const StoreContext = React.createContext(null)

export const StoreProvider = ({ value, children }) => {
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => {
    const store = React.useContext(StoreContext)
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider')
    }
    return store
}