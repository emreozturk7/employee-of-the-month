import { useSelector } from "react-redux";
import UserCard from "../components/UserCard/UserCard.js";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import loading from '../lottie/loading.json';
import Lottie from 'react-lottie';
import Header from "../components/Header/Header.js";

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
            <Header />
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
                            {console.log("Kullanıcı oy verme sayfasına geldi.")}
                            {
                                votes.map((vote, index) => (
                                    users.users.map((user) => (user.id === vote.userID &&
                                        <li key={user.id}>
                                            <UserCard
                                                key={user.id}
                                                name={user.firstName}
                                                surname={user.lastName}
                                                job={user.company.name}
                                                photoUrl={user.image}
                                                voteNumber={vote.vote}
                                                userID={vote.userID}
                                                arrangement={index + 1}
                                            />
                                        </li>
                                    ))
                                ))
                            }
                        </ul>
            }
        </div >
    );
}
export default Home;
