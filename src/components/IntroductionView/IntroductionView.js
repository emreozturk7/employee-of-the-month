import React from 'react';
import "./styles/IntroducitonView.sass";
import IntroductionBackground from '../../constants/icons/introduction.jpeg';
import WingieEnuygunLogo from '../../constants/icons/wingieenuygun.png';
import { Link } from 'react-router-dom';


function IntroductionView() {
    return (
        <div className='intro-main-container'>
            <div className='intro-container'>
                <img src={IntroductionBackground} alt="" className='intro-background' />
            </div>
            <div className='enuygun-container'>
                <div className='logo-abstract-container'>
                    <img src={WingieEnuygunLogo} alt="" className='enuygun-logo' />
                    <p className='abstract'>Ayın elamanını seçmek işte bu kadar kolay!</p>
                </div>
                <Link to="/home" className='intro-button'>Oylamaya başla!</Link>
            </div>
        </div>
    )
}

export default IntroductionView;