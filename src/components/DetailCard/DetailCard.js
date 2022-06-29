import React from 'react'
import './styles/DetailCard.sass';

function DetailCard() {
    return (
        <div>
            <div class="detail-container">
                <div class="card-container flex-column">
                    <div class="user-info flex-column">
                        <img src="https://robohash.org/hicveldicta.png" alt="" class="user-photo" />
                        <div class="name-age flex-row">
                            <p class="name">Victor Crest</p>
                            <p class="age">26</p>
                        </div>
                        <p class="location">London</p>
                    </div>
                    <hr />
                    <div class="user-stats flex-row">
                        <div class="followers-container stats-container flex-column">
                            <p class="stat-count">80K</p>
                            <p class="stat-title">Followers</p>
                        </div>
                        <div class="likes-container stats-container flex-column">
                            <p class="stat-count">803K</p>
                            <p class="stat-title">Likes</p>
                        </div>
                        <div class="photos-container stats-container flex-column">
                            <p class="stat-count">1.4K</p>
                            <p class="stat-title">Photos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard;
