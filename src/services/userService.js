import { setUsers, setIsLoaded, setError } from "../stores/site";

export const getAllUsers = async () => {
    fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setUsers(result);
                console.log(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
}