import React, { useContext } from 'react'
import stores from '../stores'

export const useStores = () => useContext(stores);