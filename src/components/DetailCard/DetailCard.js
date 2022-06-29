import React from 'react'
import './styles/DetailCard.sass';

function DetailCard() {
    return (
        <div>
            <div className="detail-container">
                <div className="card-container flex-column">
                    <div className="user-info flex-column">
                        <img src="https://robohash.org/hicveldicta.png" alt="" className="user-photo" />
                        <div className="name-age flex-row">
                            <p className="name">Victor Crest</p>
                            <p className="age">26</p>
                        </div>
                        <p className="job">Help Desk Operator</p>
                        <p className="location">Washington</p>
                    </div>
                    <hr />
                    <div className="user-stats flex-row">
                        <div className="followers-container stats-container flex-column">
                            <p className="stat-count">Email</p>
                            <p className="stat-title">atuny0@sohu.com</p>
                        </div>
                        <div className="photos-container stats-container flex-column">
                            <p className="stat-count">Address</p>
                            <p className="stat-title">1745 T Street Southeast</p>
                        </div>
                        <div className="likes-container stats-container flex-column">
                            <p className="stat-count">Phone</p>
                            <p className="stat-title">+63 791 675 8914</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard;
