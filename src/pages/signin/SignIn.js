import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import axios from "axios";
import './SignIn.css';

function SignIn() {
    const {register, handleSubmit} = useForm();
    const {loginFunction} = useContext(AuthContext)

    async function onFormSubmit(data) {
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: data.username,
                password: data.password,
            });
            loginFunction(response.data.accessToken)

        } catch (e) {
            console.error(e);
            if (e.response.status === 401) {
                alert("Inloggegevens kloppen niet, probeer opnieuw")
            }
        }
    }

    return (
        <>
            <div className="login-outer-container">
                <h1>Welkom vrienden!</h1>
                <p>Laten we beginnen met het inloggen...</p>
                <form className="auth-form" onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="username">
                    Username:
                    <input
                        type="text"
                        id="username"
                        {...register("username", {required: true, minLength: 6})}
                    />
                </label>

                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        id="password"
                        {...register("password", {required: true, minLength: 6})}
                    />
                </label>
                    <button type="submit">Inloggen</button>
                </form>
                <br/>
                <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
                <p>Door in te loggen of registreren ga je akkoord met de algemene voorwaarden.</p>
                <footer>
                    <div className="footer-container">
                        <p>copyright &copy;2022 NOVI, designed by Kailash</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default SignIn;

























