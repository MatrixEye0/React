import { createContext } from "react";

// createContext React ka ek feature hai jo components ke beech data share karne ke liye use hota hai, bina har component ko manually props pass kiye.

export const counterContex = createContext(0)