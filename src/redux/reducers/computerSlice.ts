import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Disk} from "../../interfaces";

interface ComputerState {
  currentDisk: Disk | null;
  isFullScreen: boolean;
}
const InitStateComputer: ComputerState = {
  currentDisk: null,
  isFullScreen: false,
};
export const computerSlice = createSlice({
  name: "ComputerState",
  initialState: InitStateComputer,
  reducers: {
    setDisk(state, action: PayloadAction<Disk | null>) {
      state.currentDisk = action.payload;
    },
    setFullScreen(state, action: PayloadAction<boolean>) {
      state.isFullScreen = action.payload;
    },
  },
  // extraReducers: {},
});
export const {setDisk, setFullScreen} = computerSlice.actions;
export default computerSlice.reducer;
