import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import banner from './img/PropuestaBanner.png';
// import styles from './newuser.module.css';
// import { useRouter } from 'next/router';

const NewUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  // const [error, setError] = useState('');
  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      username: username,
      email: email,
      password: password,
    };

    try {
      const res = await fetch(`${process.env.URL_API}/register`, {
        method: 'POST',
        body: JSON.stringify(newUser), // Corrected the parameter here
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message);
        return;
      }

      localStorage.setItem('isLoggedIn', 'true');
      // router.push('/perfil');
    } catch (error) {
      console.error('Ha ocurrido un error:', error);
    }
  };

  return (
    <>
      <div>
        {/* <Image src={banner} width={300} height={200} /> */}
        <h2> Regístrate </h2>

        <form onSubmit={handleSubmit}>
        <div>
        <div>
            <label htmlFor="userform">Name:</label>
            <input
              id="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              required
            />
          </div>

            <label htmlFor="userform">Username:</label>
            <input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
              required
            />
          </div>

          <div>
            <label htmlFor="emailform">Email: </label>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              required
            />
          </div>

          <fieldset>
            <label htmlFor="password">
              Password:
              <span onClick={() => setShowPassword(!showPassword)}>
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
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
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
            {!passwordMatch && <p>Las contraseñas no coinciden.</p>}
          </fieldset>

          <div>
            <button type="submit">Siguiente</button>
          </div>
        </form>

        <div>
          <p>
            ¿Tienes una cuenta?
            <Link href="/loginpage"> Inicia sesión</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NewUser;
