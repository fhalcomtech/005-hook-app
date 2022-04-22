import React, {useContext} from 'react';
import {UserContext} from "./UserContext";

const HomeScreen = () => {
    const {user, setUser} = useContext(UserContext);
    const {name, lastname} = user;
    return (
        <div>
            <h1>Home Screen</h1>
            <p>
                Welcome {`${name} ${lastname}`}
            </p>
        </div>
    );
};

export default HomeScreen;
