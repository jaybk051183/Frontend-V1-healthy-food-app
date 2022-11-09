import React, {useContext} from 'react';
import NavBar from './components/navbar/NavBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Recipe from './pages/recipe/Recipe';
import Meal from './pages/meal/Meal';
import './App.css';
import {AuthContext} from "./context/AuthContext";
import {
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';



function App() {
    const { auth } = useContext(AuthContext);
    return (
            <>
            <NavBar />
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/profile">
                        {auth.isAuth ? <Profile /> : <Redirect to="/"/>}
                    </Route>
                    <Route path="/recepten">
                        {auth.isAuth ? <Recipe /> : <Redirect to="/"/>}
                    </Route>
                    <Route path="/maaltijden">
                        {auth.isAuth ? <Meal /> : <Redirect to="/"/>}
                    </Route>
                    <Route exact path="/signin">
                        <SignIn />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            </div>
            </>
    );
}
export default App;


