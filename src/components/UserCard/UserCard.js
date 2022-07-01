import React from 'react';
import './styles/UserCard.sass';
import store from '../../stores/index.js';
import { setVote, sortVote, setDetailUserID } from "../../stores/userSlice.js";
import { Link } from 'react-router-dom';

const UserCard = ({ voteNumber, name, surname, job, photoUrl, userID, arrangement }) => {

    const giveVote = (userID) => {
        store.dispatch(setVote(userID));
        store.dispatch(sortVote());
    }

    const detailUserID = (userID) => {
        store.dispatch(setDetailUserID(userID));
    }

    return (
        <div className='main-container'>
            <div className='container'>
                <div className='row-container'>
                    <div className='box'>
                        <div className='arrangement'>#{arrangement}</div>
                    </div>
                    <div className='line' />
                    <img src={photoUrl} alt="Profile" className='image-style' />

                    <div className='info-vote-container'>
                        <div className='info-container'>
                            <p className='title'>{name} {surname}</p>
                            <p className='subtitle'>{job}</p>
                        </div>

                        <div className='vote-container'>
                            <p className='vote'>{voteNumber}</p>
                        </div>
                    </div>

                    <div className='button-container'>
                        <Link to="/detail" className='btn-style' onClick={() => detailUserID(userID)}>View Detail</Link>
                        <button className='btn-style' onClick={() => giveVote(userID)}>Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;