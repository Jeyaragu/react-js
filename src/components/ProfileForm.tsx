// Smart Component or container component
import React, { useState } from 'react';

import Button from './Button'
import LivePreview from './LivePreview';
import EmployeeData from '../assets/employeeInfo.json';

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        experience: '',
        comments: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        department: '',
        experience: '',
        comments: ''
    });
    const [submittedProfile, setSubmittedProfile] =
        useState([...EmployeeData]);
        
    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = event.target;
        // Functional update
        setFormData((prevState) => {
            const updatedState = {
                ...prevState,
                [name]: value
            };
            return updatedState;
        });
    };

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            department: "",
            experience: '',
            comments: ''
        };
        let isValid = true;
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        }
        if (!formData.experience.trim()) {
            newErrors.experience =
                'Experience is required';
            isValid = false;
        }
        if (!formData.comments.trim()) {
            newErrors.comments =
                'Comments are required';
            isValid = false;
        } else if (
            formData.comments.trim().length < 5
        ) {
            newErrors.comments =
                'Comments must contain at least 15 characters';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        setSubmittedProfile((prevState) => [...prevState, formData]);
        console.log("Form submitted");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange} />
                </label>
                {errors.name && (
                    <p style={{ color: 'red' }}>
                        {errors.name}
                    </p>
                )}
                <br />
                <label htmlFor="email">Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />
                </label>
                {errors.email && (
                    <p style={{ color: 'red' }}>
                        {errors.email}
                    </p>
                )}
                <br />
                <label htmlFor="department">Department:
                    <input
                        type="text" id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange} />
                </label>
                {errors.department && (
                    <p style={{ color: 'red' }}>
                        {errors.department}
                    </p>
                )}
                <br />
                <label>Experience:
                    <input
                        type="text"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange} />
                </label>
                {errors.experience && (
                    <p style={{ color: 'red' }}>
                        {errors.experience}
                    </p>
                )}
                <br />
                <label>Comments:
                    <textarea
                        id="comments"
                        placeholder="Enter comments if any"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}></textarea>
                </label>
                {errors.comments && (
                    <p style={{ color: 'red' }}>
                        {errors.comments}
                    </p>
                )}
                <br />
                <Button type="submit" text='submit' />
            </form>
            <LivePreview employeeData={submittedProfile} />
        </div>
    )
}

export default ProfileForm;