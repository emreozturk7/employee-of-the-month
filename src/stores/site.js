import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
    votes: {},
    users: {},
    error: null,
    isLoaded: false,
}

const site = createSlice({
    name: 'site',
    initialState,
    reducers: {
        addVote: (state, action) => {

        },
        setVotes: (state, action) => {
            state.votes = action.payload
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
        },
        setVote: (state, action) => {
            state.votes.map((vote) => (
                vote.userID === action.payload && (vote.vote += 1)
            ));
        }
    }
});

export const { setVotes, setTheme, setUsers, setError, setIsLoaded, setVote } = site.actions;
export default site.reducer;
