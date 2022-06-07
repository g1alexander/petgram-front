import { createContext, useEffect, useState } from 'react'
import { getUserProfile } from '@services/User';
import { getAccessToken } from '@helpers/auth';
import { User } from '../models/User';

interface IAuthContext{
  user: User | null
  loading: boolean
  error : string | null
  setUser: (user: User) => void
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: false,
  error: null,
  setUser: () => {}
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState<string>()

  const accessToken = getAccessToken()

  useEffect(() => {
    accessToken && getUserProfile(accessToken)
      .then(response => {
        if (response.message) {
          setError(response.message)
          setUser(null)
        } else {
          setUser(response)
        }
      })
    setLoading(false)
  }, [])

  return <AuthContext.Provider value={{
    user,
    loading,
    error,
    setUser
  }}>{children}</AuthContext.Provider>
}
