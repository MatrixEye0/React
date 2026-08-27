import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'

export default configureStore({
  reducer: {
    counter: counterReducer

    // like this ham multipe slice store se connect kar sakte hai==========================================
    // auth: authReducer,
    // cart: cartReducer,
    // products: productsReducer,
    // notifications: notificationReducer
  }
})

// create store 
// create slice
// register user in store


// //     USER
//         │
//         │ click
//         ↓
//     COMPONENT
//         │
//         │ dispatch(action)
//         ↓
//       ACTION
//         │
//         ↓
//       REDUX
//         │
//         ↓
//      REDUCER
//         │
//         │ updates
//         ↓
//       STORE
//         │
//         ↓
//    useSelector()
//         │
//         ↓
//     COMPONENT
//         │
//         ↓
//    RE-RENDER