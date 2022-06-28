import { setUsers, setIsLoaded, setError, setVotes } from "../stores/userSlice";
import store from "../stores/index";

const getAllUsers = () => {
    fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(
            (result) => {
                store.dispatch(setUsers(result));
                store.dispatch(setIsLoaded(true));
                store.dispatch(setVotes(result.users.map((user) => (
                    {
                        "userID": user.id,
                        "vote": 0,
                    }
                ))))
            },
            (error) => {
                store.dispatch(setIsLoaded(true));
                store.dispatch(setError(error));
            }
        );
}

export default getAllUsers;
