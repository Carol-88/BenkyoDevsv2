import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import banner from './img/PropuestaBanner.png';
import styles from './newuser.module.css'

function Registro() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            username: username,
            email: email,
            password: password,
        };

        const newUserJson = JSON.stringify(newUser);

        const res = await fetch(`${process.env.URL_API}/register`, {
            method: 'POST',
            body: newUserJson,
            headers: {
                'Content-type': 'application/json',
            },
        });

        const responseBody = await res.json();
        if (!res.ok) {
            toast.error(responseBody.message);
            return;
        }

        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            <div>
                <Image src={banner} width={300} height={200} />
                <h2>
                    {' '}
                    Regístrate
                </h2>

                <form  onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="userform">Username:</label>
                        <input
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            value={username}
                            required
                        ></input>
                    </div>

                    <div>
                        <label htmlFor="emailform">Email: </label>
                        <input
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            value={email}
                            required
                        ></input>
                    </div>

                    <fieldset>
                        <label htmlFor="password">
                            Password:
                            <span                                
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '👀' : '🔒'}
                            </span>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="password">
                            Confirm password:
                            <span
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                            >
                                {showConfirmPassword ? '👀' : '🔒'}
                            </span>
                        </label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirm-password"
                            value={confirmPassword}
                            required
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setPasswordMatch(e.target.value === password);
                            }}
                        />
                        {!passwordMatch && (
                            <p>
                                Las contraseñas no coinciden.
                            </p>
                        )}
                    </fieldset>

                    <div>
                        <button
                            type="submit"
                        >
                            Siguiente
                        </button>
                    </div>
                </form>

                <div>
                    <p>
                        ¿Tienes una cuenta?
                        <Link href="/login"> Inicia sesión</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Registro;
