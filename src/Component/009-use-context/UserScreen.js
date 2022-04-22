import React, {useContext} from 'react';
import {useForm} from "../../hooks/useForm";
import {UserContext} from "./UserContext";

const UserScreen = () => {
    const {user,setUser} = useContext(UserContext);
    const [formData, handlerInputChange, resetForm] = useForm({})
    const {name, lastname} = formData;
    const handlerSubmit = (e) => {
        e.preventDefault();
        setUser({
            id:(new Date()).getTime(),
            name,
            lastname
        })
        resetForm();
    }
    return (
        <div className="container">
            <form onSubmit={handlerSubmit} className="form">
                <input className="form-control mt-2" type="text" value={name} placeholder="name" onChange={handlerInputChange} name="name"/>
                <input className="form-control mt-2" type="text" value={lastname} placeholder="lastname" onChange={handlerInputChange} name="lastname"/>
                <button type="submit" className="btn btn-primary mt-2">Update</button>
            </form>
        </div>
    );
};

export default UserScreen;
