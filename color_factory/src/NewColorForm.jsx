import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {

    const navigate = useNavigate();

    const INITIAL_FORM_DATA = {
        name: '',
        value: '#000000'
    }

    const [formData, setFormData] = useState(INITIAL_FORM_DATA)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name) return alert('Name is required.');

        addColor(formData);
        setFormData(INITIAL_FORM_DATA);
        navigate('/');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="value">Value:</label>
                <input
                    type="color"
                    id="value"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );

}

export default NewColorForm;