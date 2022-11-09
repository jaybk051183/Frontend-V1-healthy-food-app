import React from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import './SignUp.css';

function SignUp() {
    const {register, handleSubmit} = useForm();
    const history = useHistory()

    async function onFormSubmit(data) {
        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ["user"]
            })
            history.push("/signin")

        } catch (e) {
            console.error(e)
            alert(e.response.data.message)
        }
    }

    return (
        <>
            <div className="signup-outer-container">
                <h1>Registreren</h1>
                <p>Laten we beginnen met het registreren....</p>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="username">
                        Username:
                        <input
                            type="text"
                            placeholder="username"
                            id="username"
                            {...register("username", {
                                required: true,
                                minLength: {value: 6, message: "Minimum amount of characters is 6"}
                            })}
                        />
                    </label>

                    <label htmlFor="user-email">
                    Email:
                    <input
                        type="email"
                        placeholder="user@email.com"
                        id="user-email"
                        {...register("email", {
                            required: true,
                            minLength: {value: 6, message: "Minimum amount of characters is 6",},
                            validate: (value) => value.includes('@'),
                        })}
                    />
                    </label>

                    <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        {...register("password", {
                            required: true,
                            minLength: {value: 6, message: "Minimum amount of characters is 6"}
                        })}
                    />
                    </label>
                    <button type="submit" className="form-button">Registreren</button>
            </form>
                <br/>
                <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
                <footer>
                    <div className="footer-container">
                        <p>copyright &copy;2022 NOVI, designed by Kailash</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default SignUp;