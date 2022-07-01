import React from 'react'
import './styles/DetailCard.sass';
import BackButton from '../../constants/icons/back-button.png';
import { useNavigate } from 'react-router-dom';

function DetailCard({ photoURL, age, city, name, surname, email, address, phone, job }) {
    let backNavigate = useNavigate();
    return (
        <div>
            <div className="detail-container">
                <button className='back-button' onClick={() => { backNavigate(-1); console.log("Kullanıcı detay sayfasından ana sayfaya geri döndü."); }}>
                    <img src={BackButton} alt="" className='back-button-image' />
                </button>
                <div className="card-container flex-column">
                    <div className="user-info flex-column">

                        <img src={photoURL} alt="" className="user-photo" />
                        <div className="name-age-container flex-row">
                            <p className="name">{name} {surname}</p>
                            <p className="age">{age}</p>
                        </div>
                        <p className="job">{job}</p>
                        <p className="location">{city}</p>
                    </div>
                    <div className="user-detail-container flex-row">
                        <div className="detail-container-info flex-column">
                            <p className="detail-title">Email</p>
                            <p className="detail-paragraph">{email}</p>
                        </div>
                        <div className="detail-container-info flex-column">
                            <p className="detail-title">Address</p>
                            <p className="detail-paragraph">{address}</p>
                        </div>
                        <div className="detail-container-info flex-column">
                            <p className="detail-title">Phone</p>
                            <p className="detail-paragraph">{phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard;
