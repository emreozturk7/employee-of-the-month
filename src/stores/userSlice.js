import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: null,
    loading: false,
    error: ""
}

const useSlice = createSlice({
    name: "user",
    initialState,
})