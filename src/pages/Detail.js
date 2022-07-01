import React from 'react'
import DetailCard from '../components/DetailCard/DetailCard';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';

function Detail() {
    const { users, detailUserID } = useSelector(state => state.userSlice);

    return (
        <div>
            <Header />
            {
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
            }
        </div>
    )
}
export default Detail;
