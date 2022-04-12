import { useState } from 'react'

export const useForm = (initialData = {}) => {

    const [formData, setFormData] = useState(initialData);

    const handlerInputChange = ({target}) => {setFormData({...formData, [target.name]: target.value})}
    const resetForm = (resetFromData) => {setFormData(resetFromData);}

    return [formData, handlerInputChange, resetForm];
}
