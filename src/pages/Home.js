import { useDispatch, useSelector } from "react-redux";
import { setVote } from "../stores/site";

function Home() {
    const { users, error, isLoaded, votes } = useSelector(state => state.site);
    const dispatch = useDispatch(state => state.site);

    const giveVote = (userID) => {
        dispatch(setVote(userID));
    }

    return (
        <div>
            {
                error
                    ? <div>Error: {error.message}</div>
                    : !isLoaded
                        ? <div>Loading...</div>
                        : <ul>
                            {
                                users.users.map((user, index) => (
                                    <li key={user.id}>
                                        {user.firstName} {votes[index].vote}  <button onClick={() => giveVote(user.id, index)}>Ekle</button>
                                    </li>
                                ))
                            }
                        </ul>
            }
        </div>
    );
}
export default Home;
