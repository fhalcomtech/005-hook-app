import React, { useEffect, useState } from 'react'
import {Message} from "./Message";

export const SimpleForm = () => {
    const [formData, setFormData] = useState({user: '', email:''});
    const {user,email} = formData;
    const handlerChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    useEffect(()=>{console.log('Inicio el componente')},[])

    useEffect(()=>{
        setFormData({...formData, email: user.length})
    },[user]);

    return (
        <>
            <h1>SimpleForm Login</h1>
            <div className = "container">
            <input 
            type="text"
            name="user"
            placeholder='write here'
            className="form-control"
            value={user}
            onChange={handlerChange}
            />

<input
    type="email"
    name="email"
    placeholder=''
    value={email}
    className="form-control mt-2"
    onChange={handlerChange}
    />
                <div>
                    {user === 'fhalcom' && <Message text={user}/>}
                </div>
            </div>
        </>
  )
}
