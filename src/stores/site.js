import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
    voteList: {},
    users: {},
    error: null,
    isLoaded: false,
}

const site = createSlice({
    name: 'site',
    initialState,
    reducers: {
        setVote: (state, action) => {
            state.vote = action.payload
        },
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload
        }
    }
});

export const { setVote, setTheme } = site.actions;
export default site.reducer;
