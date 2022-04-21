import React from 'react';
import AppRouter from "./AppRouter";
import {UserContext} from "./UserContext";


const MainApp = () => {return (
    <UserContext.Provider>
        <AppRouter/>
    </UserContext.Provider>
);};

export default MainApp;
