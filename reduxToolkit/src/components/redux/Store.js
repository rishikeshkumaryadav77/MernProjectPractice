import { configureStore} from "@reduxjs/toolkit";
import counterSlice from './CountSlice'


export const store = configureStore(
  {
    reducer:{
      countStore:counterSlice
    }
  }
)