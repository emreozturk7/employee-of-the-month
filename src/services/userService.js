import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUsers, setIsLoaded, setError, setVotes } from "../stores/site";

function GetAllUsers() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch(setUsers(result));
                    dispatch(setIsLoaded(true));
                    dispatch(setVotes(result.users.map((e) => (
                        {
                            "userID": e.id,
                            "vote": 0,
                        }
                    ))))
                },
                (error) => {
                    dispatch(setIsLoaded(true));
                    dispatch(setError(error));
                }
            );
    }, []);

    return (
        <>
        </>
    );
}

export default GetAllUsers;
