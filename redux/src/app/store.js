import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})

// create store 
// create slice
// register user in store
