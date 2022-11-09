import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <>
            <header className="homepage-header"><h1>Welkom</h1></header>
            <body>
            <div className="image-container">
                <section>
                    <h2>Gezond eten</h2>
                    <p>Mijn gezonde eetgids biedt informatie over voeding en wil jou helpen om gezonder en bewuster te kiezen.</p>
                    <br/><br/>
                    <h2>Gezonde recepten</h2>
                    <p>Volop keuze uit recepten. Op zoek naar makkelijke, lekkere en vooral gezonde recepten? Onze receptensite biedt genoeg recepten. Voor ontbijt, lunch en avondeten. Voor toetjes en traktaties. Makkelijk te maken, met vooral producten uit de Schijf van Vijf.Voer eenvoudig uw recept in op onze recepten site en ontvang een breed scala aan recepten!</p>
                    <br/><br/>
                    <h2>Hoeveel calorieën zitten erin? - Maaltijdenplanner</h2>
                    <p>Met de Maaltijdenplanner kun je op basis van je gewenste hoeveel calorieën per dag drie maaltijd adviezen ontvangen. Voer eenvoudig het aantal calorieën in!</p>
                    <br/><br/>
                    <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
                    <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen account hebt.</p>
                </section>
            </div>
            </body>
            <footer>
                    <p>copyright &copy;2022 NOVI, designed by Kailash</p>
            </footer>
        </>
    );
}

export default Home;