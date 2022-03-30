import React, {useRef, useState} from 'react';
import {useForm} from "../../hooks/useForm";

const FocusScreen = () => {
    const [formData, handlerInputChange] =useForm({name: ''});
    const {name} = formData;
    const refText = useRef();

    const handlerClick = (e) => {
        e.preventDefault();
        refText.current.select();
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
    }

    return (<div className='container m-5'>
        <form action={handlerSubmit} className='form'>
            <input
                type="text"
                placeholder='write here'
                value={name}
                name="name"
                onChange={handlerInputChange}
                ref={refText}
                className='form-control mb-2'
            />
            <button className='btn btn-outline-success mt-2' onClick={handlerClick}>Focus</button>
        </form>
        </div>);
};

export default FocusScreen;
