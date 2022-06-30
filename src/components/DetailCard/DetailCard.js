import React from 'react'
import './styles/DetailCard.sass';

function DetailCard({
    photoURL,
    age,
    city,
    name,
    surname,
    email,
    address,
    phone,
    job
}) {
    return (
        <div>
            <div className="detail-container">
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
                        <hr className="solid" />
                        <div className="detail-container-info flex-column">
                            <p className="detail-title">Address</p>
                            <p className="detail-paragraph">{address}</p>
                        </div>
                        <hr className="solid" />
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
