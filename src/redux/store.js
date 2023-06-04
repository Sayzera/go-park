import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './mainSlice'

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
})

export { store }
