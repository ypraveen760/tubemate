import { createSlice } from "@reduxjs/toolkit";

const searchDataSlice = createSlice({
  name: "searchData",
  initialState: "",
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    clearData: () => {
      return "";
    },
  },
});
export const { setData, clearData } = searchDataSlice.actions;
export default searchDataSlice.reducer;
