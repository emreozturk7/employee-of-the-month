import React from 'react';
import './styles/UserCard.sass';
import store from '../../stores/index.js';
import { setVote, sortVote } from "../../stores/userSlice.js";

const UserCard = ({ voteNumber, name, surname, job, photoUrl, userID }) => {


    const giveVote = (userID) => {
        store.dispatch(setVote(userID));
        store.dispatch(sortVote());
    }

    return (
        <div className='main-container'>
            <div className='container'>
                <div className='row-container'>
                    <img src={photoUrl} alt="Profile" className='image-style' />

                    <div className='photo-container'>
                    </div>
                    <div className='info-container'>
                        <p className='title'>{name} {surname}</p>
                        <p className='subtitle'>{job}</p>
                    </div>
                    <div className='vote-container'>
                        <p className='vote'>{voteNumber}</p>
                    </div>
                    <div className='button-container'>
                        <button className='btn-style'>View Detail</button>
                        <button className='btn-style' onClick={() => giveVote(userID)}>Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;