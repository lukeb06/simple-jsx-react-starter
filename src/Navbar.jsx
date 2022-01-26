import React, { useState, useEffect, useRef } from 'react'

import { AiOutlineSearch } from "react-icons/ai"
import { RiLogoutCircleLine } from "react-icons/ri"
import { FiSettings } from "react-icons/fi"
import { CgMenu } from "react-icons/cg"
import { BsPersonCircle } from "react-icons/bs"
import { IoHome } from "react-icons/io5"

import Cookies from 'js-cookie'

const Navbar = ({ updateAuth, goHome, doSearch, goSettings, visitProfile }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menu = useRef();

    const searchRef = useRef();

    useEffect(() => {
        menu.current.className = menuOpen ? "open" : "";
    }, [menuOpen]);

    return (
        <div id="navbar">
            <form onSubmit={e => {
                e.preventDefault();

                doSearch(searchRef.current.value);
            }}>
                <input ref={searchRef} placeholder="Search" type="search" name="search" id="searchInput" />
                <button className="navbar-icon" id="searchButton"><AiOutlineSearch></AiOutlineSearch></button>
            </form>
            <button onClick={() => setMenuOpen(isOpen => !isOpen)} id="menuButton" className="navbar-icon"><CgMenu></CgMenu></button>
            <div ref={menu} id="menu">
                <div onClick={() => setMenuOpen(false)} id="menuStandBehind"></div>
                <div id="menuContent">
                    <button onClick={() => {
                        setMenuOpen(false);
                        goHome();
                    }} id="homeButton" className="menu-item"><IoHome></IoHome> <div>Home</div></button>

                    <button onClick={() => {
                        setMenuOpen(false);
                        visitProfile(Cookies.get("email"));
                    }} id="profileButton" className="menu-item"><BsPersonCircle></BsPersonCircle> <div>Profile</div></button>

                    <button onClick={() => {
                        setMenuOpen(false);
                        goSettings();
                    }} id="settingsButton" className="menu-item"><FiSettings></FiSettings> <div>Settings</div></button>
                    <button onClick={() => {
                        Cookies.remove("email");
                        Cookies.remove("password");
                        
                        updateAuth();
                    }} id="logoutButton" className="menu-item"><RiLogoutCircleLine></RiLogoutCircleLine> <div>Logout</div></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar