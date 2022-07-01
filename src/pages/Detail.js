import React, { useState, useEffect } from 'react'
import DetailCard from '../components/DetailCard/DetailCard';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Lottie from 'react-lottie';
import loading from '../lottie/loading.json';

function Detail() {
    const { users, detailUserID } = useSelector(state => state.userSlice);

    const [stateUsers, setStateUsers] = useState();
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const getUser = async () => {
        await fetch("https://dummyjson.com/users/" + localStorage.getItem("detailUserID"))
            .then(res => res.json())
            .then(
                (result) => {
                    setStateUsers([{ result }]);
                    setIsLoading(true);
                },
                (error) => {
                    setIsLoading(true);
                    setIsError(error);
                }
            );
    }

    return (
        <div>
            <Header />
            {
                users !== null ?
                    users.users.map((user) => (
                        user.id === detailUserID &&
                        <DetailCard
                            key={user.id}
                            photoURL={user.image}
                            age={user.age}
                            city={user.company.address.city}
                            name={user.firstName}
                            surname={user.lastName}
                            email={user.email}
                            address={user.company.address.address}
                            phone={user.phone}
                            job={user.company.title}
                        />
                    ))
                    :
                    isError
                        ? <div>Error: {isError.message}</div>
                        : !isLoading
                            ? <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                            :
                            stateUsers.map((user) => (
                                <DetailCard
                                    key={user.result.id}
                                    photoURL={user.result.image}
                                    age={user.result.age}
                                    city={user.result.company.address.city}
                                    name={user.result.firstName}
                                    surname={user.result.lastName}
                                    email={user.result.email}
                                    address={user.result.company.address.address}
                                    phone={user.result.phone}
                                    job={user.result.company.title}
                                />
                            ))
            }
        </div>
    )
}
export default Detail;
