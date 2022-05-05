import React, { createContext, useState } from "react"

export interface AuthUser {
  name :string
  email :string
}

interface UserContextInterface {
  user :AuthUser | null
  setUser :React.Dispatch<React.SetStateAction<AuthUser | null>>
}

interface UserContextProviderProps {
  children :React.ReactElement
}

export const UserContext = createContext({} as UserContextInterface)

export const UserContextProvider = ({ children } :UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
} 