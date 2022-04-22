import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import NavBar from "./NavBar";
import UserScreen from "./UserScreen";
const AppRouter = () => {
    return (
        <Router>
                <NavBar/>
                <Routes>
                    <Route path="/"     element={<HomeScreen/>}/>
                    <Route path="about" element={<AboutScreen/>}/>
                    <Route path="login" element={<LoginScreen/>}/>
                    <Route path="user"  element={<UserScreen/>}/>
                    <Route path="home"  element={<HomeScreen/>}/>
                </Routes>
        </Router>
    );
};

export default AppRouter;
