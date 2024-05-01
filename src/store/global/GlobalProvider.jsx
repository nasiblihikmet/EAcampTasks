// @ts-nocheck

import { createContext, useContext, useReducer } from 'react'
import { TYPES } from './types'

export const globalContext = createContext()

const initialValue = {
  basket: 0,
  price: 5,
  form: {},
}

function reducer(state, action) {
  switch (action.type) {
    case TYPES.BASKET:
      return { ...state, basket: action.payload }
    case TYPES.FORM:
      return { ...state, form: action.payload }

    default:
      return state
  }
}

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue)

  const value = {
    state,
    dispatch,
  }

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  )
}

export default GlobalProvider

export const useGlobalContext = () => {
  const value = useContext(globalContext)
  return value
}

