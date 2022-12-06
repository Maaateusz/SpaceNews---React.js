import '../Styles/Header.css'
import React from 'react'

export default function Header(prop) {

    return (
        <header className={prop.darkMode ? 'dark': ''}>
            <h1 className="header-title">Spaceflight News</h1>
            <div className="switch-button">
                <span>Dark Mode</span>
                <label className="switch">
                    <input type="checkbox" onChange={prop.changeDarkMode} checked={prop.darkMode}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </header>
    )
}