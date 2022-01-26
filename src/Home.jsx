import React, { useState, useEffect } from 'react'

import Navbar from "./Navbar.jsx"
import Search from "./Search.jsx"
import Profile from "./Profile.jsx"

const Home = ({ updateAuth }) => {
    const [profile, setProfile] = useState(false);
    const [settings, setSettings] = useState(false);
    const [search, setSearch] = useState(false);

    const goHome = () => {
        setProfile(false);
        setSettings(false);
        setSearch(false);
    }

    const goProfile = () => {
        setProfile(true);
        setSettings(false);
        setSearch(false);
    }

    const goSettings = () => {
        setProfile(false);
        setSettings(true);
        setSearch(false);
    }
    
    const goSearch = () => {
        setProfile(false);
        setSettings(false);
        setSearch(true);
    }

    const [searchTerm, setSearchTerm] = useState("");

    const doSearch = query => {
        setSearchTerm(query);
        goSearch();
    }

    const [profileLink, setProfileLink] = useState("");

    const visitProfile = email => {
        setProfileLink(email);
        goProfile();
    }

    return (
        <>
            <Navbar goHome={goHome} visitProfile={e => visitProfile(e)} doSearch={q => doSearch(q)} goSettings={goSettings} updateAuth={updateAuth}></Navbar>
            {(!profile && !settings && !search) ? (
            <div id="home">
                home
            </div>
            ) : (search ? <Search query={searchTerm}></Search> : (profile ? <Profile email={profileLink}></Profile> : (settings ? <Settings></Settings> : <></>)))}
        </>
    )
}

export default Home