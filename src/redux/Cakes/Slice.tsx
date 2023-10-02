import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { CakesSliceState } from "./Cakes.types";
import { CakeType } from "./Cakes.types";



const initialState: CakesSliceState = {
  items: [],
  status: "loading",
};

const CakeItemsSlice = createSlice({
  name: "cakes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCakesItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCakesItems.fulfilled, (state, action) => {
        (state.status = "success"), (state.items = action.payload);
      })
      .addCase(fetchCakesItems.rejected, (state) => {
        state.status = "error";
      });
  },
});

const fetchCakesItems = createAsyncThunk<CakeType[]>(
  "cakes/fetchItems",
  async () => {
    const response = await axios.get<CakeType[]>(
      "https://64a5256600c3559aa9bf24ab.mockapi.io/bakery"
    );
    return response.data;
  }
);

export const selectCakesData = (state: RootState) => state.cakes;
export const {} = CakeItemsSlice.actions;
export default CakeItemsSlice.reducer;
export { CakeItemsSlice, fetchCakesItems };
