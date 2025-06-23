import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/UserReducer'
import sectionReducer from './Section/SectionReducer'

const store = configureStore({
    reducer: {
        user: userReducer,
        section: sectionReducer
    }
})

export default store
