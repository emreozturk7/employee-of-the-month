import { useSelector } from "react-redux";
import UserCard from "../components/UserCard/UserCard.js";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import loading from '../lottie/loading.json';
import Lottie from 'react-lottie';



function Home() {
    const { users, error, isLoaded, votes } = useSelector(state => state.userSlice);
    const [animationParent] = useAutoAnimate();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            {
                error
                    ? <div>Error: {error.message}</div>
                    : !isLoaded
                        ? <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                        : <ul ref={animationParent}>
                            {
                                votes.map((vote) => (
                                    users.users.map((user) => (user.id === vote.userID &&
                                        <UserCard
                                            key={user.id}
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
        </div >
    );
}
export default Home;
