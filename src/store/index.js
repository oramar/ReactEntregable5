import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from './slices/nameTrainer.slice'
import rutaActual from './slices/rutaActual.slice'
export default configureStore({
    reducer:{
        nameTrainer,
        rutaActual
    }
})