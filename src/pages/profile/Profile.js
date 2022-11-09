import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import './Profile.css';

function Profile() {
    const { auth } = useContext(AuthContext);

    return (
        <>
            <header className="profilepage-header"><h1>Profielpagina</h1></header>
            <section>
                <h2>Gegevens gebruiker</h2>
                <br/><br/>
                <p><strong>Gebruikersnaam:</strong>{auth.username}</p>
                <p><strong>Email:</strong> {auth.email}</p>
                <p><strong>Satus:</strong> {auth.isAuth ? "Gebruiker is geautoriseerd" : "Gebruiker is niet geautoriseerd"}</p>
            </section>
            <footer>
                <div className="footer-container">
                    <p>copyright &copy;2022 NOVI, designed by Kailash</p>
                </div>
            </footer>
        </>
    );
}

export default Profile;