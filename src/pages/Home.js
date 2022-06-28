import { useSelector } from "react-redux";
import UserCard from "../components/UserCard/UserCard.js";

function Home() {
    const { users, error, isLoaded, votes } = useSelector(state => state.userSlice);

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
                                    users.users.map((user) => (user.id === vote.userID &&
                                        <UserCard
                                            name={user.firstName}
                                            surname={user.lastName}
                                            job={user.company.name}
                                            photoUrl={user.image}
                                            voteNumber={vote.vote}
                                            userID={vote.userID}
                                        />
                                    ))

                                ))
                            }
                        </ul>
            }
        </div>
    );
}
export default Home;
