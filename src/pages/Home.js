import { useSelector } from "react-redux";

function Home() {
    const { users, error, isLoaded } = useSelector(state => state.site);

    return (
        <div>
            {
                error
                    ? <div>Error: {error.message}</div>
                    : !isLoaded
                        ? <div>Loading...</div>
                        : <ul>
                            {
                                users.users.map(user => (
                                    <li key={user.id}>
                                        {user.firstName}
                                    </li>
                                ))
                            }
                        </ul>
            }
        </div>
    );
}
export default Home;
