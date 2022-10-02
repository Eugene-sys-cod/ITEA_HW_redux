import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers/root.reducer"

const store = configureStore({
    reducer: {
        root: rootReducer
    }
    })

export default store  