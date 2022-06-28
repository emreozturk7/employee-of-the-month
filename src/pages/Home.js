import { useDispatch, useSelector } from "react-redux";
import { setVote, sortVote } from "../stores/userSlice";

function Home() {
    const { users, error, isLoaded, votes } = useSelector(state => state.userSlice);
    const dispatch = useDispatch(state => state.userSlice);

    const giveVote = (userID) => {
        dispatch(setVote(userID));
        dispatch(sortVote());
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
                                votes.map((vote) => (
                                    <div key={vote.userID}>
                                        {users.users.map((user) => (user.id === vote.userID && user.firstName))}{vote.vote}  <button onClick={() => giveVote(vote.userID)}>Ekle</button>
                                    </div>
                                ))
                            }
                        </ul>
            }
        </div>
    );
}
export default Home;
