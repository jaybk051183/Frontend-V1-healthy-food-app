import React, {useContext} from 'react';
import logo2 from '../../assets/logo2.png'
import { NavLink } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import './NavBar.css'

function NavBar() {
    const { auth, logoutFunction } = useContext(AuthContext);

    return (
        <nav>
            <span className="logo-container">
                <img src={logo2} alt="logo"/>
                <h3 className="logo-text">Mijn gezonde eetgids</h3>
            </span>
            <ul>
                <li> <NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                {auth.isAuth === true ?
                    <>
                        <li><NavLink to="/profile" activeClassName="active-link">Profiel</NavLink></li>
                        <li><NavLink to="/recepten" activeClassName="active-link">Recepten</NavLink></li>
                        <li><NavLink to="/maaltijden" activeClassName="active-link">Maaltijden</NavLink></li>
                        <li><button type="button" onClick={logoutFunction}>Log uit</button></li>
                    </>
                    :
                    <>
                    <li><NavLink to="/signin" activeClassName="active-link">Log in</NavLink></li>
                    <li><NavLink to="/signup" activeClassName="active-link">Registreren</NavLink></li>
                    </>
                }
            </ul>
        </nav>
    );
}
export default NavBar;




















