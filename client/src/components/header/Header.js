import React from 'react'
import './Header.css'
import logo from '../../logo_agLabo.svg'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo_allgrow_labo'>
                <img className='image_logo' src={logo} alt="Công ty TNHH Allgrow-labo" />
            </h1>
            <h4 className='header-title'>Search Ranking Measurement System</h4>
            <h4 className='country-work'>Search Ranking Measurement System</h4>
        </header>
    )
}

export default Header