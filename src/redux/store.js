import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./slice/cartSlice";
import quizReducer from "./slice/Quizslice";

const store = configureStore({
  reducer: {
    // cart: cartReducer,
    quiz: quizReducer,
  },
});

export default store;
