import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
     state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload //payload -> Action ke saath additional data bhejna.  Action simply ek object hota hai jo batata hai: Kya hua / kya karna hai?
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

// Agar user information multiple components ko chahiye, Redux useful ho sakta hai.

// Redux Store
//      ↓
// Global State
//      ↓
// Multiple Components

// ---------------------------------------------------------------------------------------
// createSlice() Redux Toolkit ka function hai jo automatically:
// reducer create karta hai
// actions create karta hai
// action types create karta hai
// ---------------------------------------------------------------------------------------

// redux important for----------------------------------------------------------------------
// User authentication
// Shopping cart
// User profile
// Notifications
// Large application state
// Shared state
// Complex state logic