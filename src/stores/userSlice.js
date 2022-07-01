import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
    votes: {},
    users: null,
    detailUserID: 0,
    error: null,
    isLoaded: false,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
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
        },
        sortVote: (state) => {
            state.votes.sort((a, b) => b.vote - a.vote);
        },
        setDetailUserID: (state, action) => {
            state.detailUserID = action.payload;
        }
    }
});

export const { setVotes, setTheme, setUsers, setError, setIsLoaded, setVote, sortVote, setDetailUserID } = userSlice.actions;
export default userSlice.reducer;
