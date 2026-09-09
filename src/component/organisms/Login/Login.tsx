// @ts-expect-error
import './Login.style.scss';
import { useState } from 'react';

import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import FormField from '../../molecules/FormFields/FormFields';

import { useLogin } from '../../../hooks/useLogin';

const Login = () => {
    const { submit, apiError } = useLogin();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({ email: '', password: '' });
    const validateInput = () => {
        let isValid = true;
        const validationErrors = {
            email: '',
            password: ''
        };
        if (!loginData.email.trim()) {
            validationErrors.email = 'Email is required';
            isValid = false;
        }
        if (!loginData.password.trim()) {
            validationErrors.password = 'Password is required';
            isValid = false;
        }
        setError(validationErrors);
        return isValid;
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateInput()) {
            return;
        }
        await submit(loginData.email, loginData.password);
    };

    return (
        <main className="login-page d-flex align-items-center justify-content-center min-vh-100 p-3">
            <form className="login-card d-flex flex-column" onSubmit={handleSubmit}>
                <div className="login-heading">
                    <p className="login-kicker">WELCOME BACK</p>
                    <h1>Sign in</h1>
                    <p>Enter your details to access your account.</p>
                </div>
                <FormField
                    labelText="Email address"
                    htmlFor="email"
                    inputId="email"
                    inputName="email"
                    inputType="email"
                    placeHolder="you@example.com"
                    inputValue={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
                {error.email && <p className="error-message">{error.email}</p>}
                <FormField
                    labelText="Password"
                    htmlFor="password"
                    inputId="password"
                    inputName="password"
                    inputType={showPassword ? 'text' : 'password'}
                    placeHolder="Enter your password"
                    inputValue={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                >
                    <Button className="password-visibility" type="button" onClick={() => setShowPassword(!showPassword)}>
                        <span aria-hidden="true">&#128065;</span>
                    </Button>
                </FormField>
                {error.password && <p className="error-message">{error.password}</p>}
                <div className="form-check d-flex align-items-center gap-2">
                    <Input className="form-check-input mt-0" type="checkbox" name="remember" />
                    <Label className="remember-option form-check-label">
                        <span>Remember me</span>
                    </Label>
                </div>
                <Button className="btn login-submit w-100" type="submit" name="login" label="Log in" />
                {apiError && <p className="error-message">{apiError}</p>}
            </form>
        </main>
    );
};

export default Login;