import React from 'react'
import './Header.css'
import logo from '../../logo_agLabo.svg'
import logoJapan from '../../jp.svg'
import logoVietnam from '../../vn.svg'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo_allgrow_labo'>
                <img className='image_logo' src={logo} alt="Công ty TNHH Allgrow-labo" />
            </h1>
            <h2 className='header-title'>Search Ranking Measurement System</h2>
            <div className='country-work'>
                <img className='Japan_logo' src={logoJapan} alt="Japan Country" />
                <img className='VN_logo' src={logoVietnam} alt="VietNam Country" />
            </div>
        </header>
    )
}

export default Header