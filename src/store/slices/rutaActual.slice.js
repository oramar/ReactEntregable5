import { createSlice } from "@reduxjs/toolkit";

export const rutaActualSlice = createSlice({
  name: "rutaActual",
  initialState: window.location.href,
  reducers: {
    setRutaActualGlobal: (state, action) => action.payload,
  },
});
export const { setRutaActualGlobal } = rutaActualSlice.actions;
export default rutaActualSlice.reducer;