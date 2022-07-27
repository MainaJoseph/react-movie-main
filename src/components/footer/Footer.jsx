import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/jm.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">JM_Movies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to={{ pathname: "D:/react/react-movie-main/components/faq.html" }} >About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/faq/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to={{ pathname: "https://www.imdb.com/chart/top/" }} target="_blank" >Top IMDB </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
