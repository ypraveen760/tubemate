import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchDataReducer from "./searchDataSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchData: searchDataReducer,
  },
});
export default store;
