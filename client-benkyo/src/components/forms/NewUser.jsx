import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './newuser.module.css';
import { useRouter } from 'next/router';

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
      <div className={styles.formContainer}>
        <Image src='/img/PropuestaBanner.png' width={500} height={200} />
        <h2 className={styles.tittle}> Regístrate </h2>

        <form onSubmit={handleSubmit} >
      
          <fieldset className={styles.fields}>
              <label htmlFor="userform"></label>
              <input
                id="name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                required
                placeholder='Tu nombre'
              />
            </fieldset>

            <fieldset className={styles.fields}>
            <label htmlFor="userform"></label>
            <input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
              required
              placeholder='Nombre de usuario'
            />
          </fieldset>

          <fieldset className={styles.fields}>
            <label htmlFor="emailform"></label>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              required
              placeholder='Tu email'
            />
          </fieldset>

          <fieldset className={styles.fields}>
            <label htmlFor="password">
              
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
              placeholder='Tu contraseña'
            />
          </fieldset>

          <fieldset className={styles.fields}>
            <label htmlFor="password">
              
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? '👀' : '🔒'}
              </span>
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              value={confirmPassword}
              required
              placeholder='Confirma tu contraseña'
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordMatch(e.target.value === password);
              }}
            />
            {!passwordMatch && <p>Las contraseñas no coinciden.</p>}
          </fieldset>

         
            <button type="submit" className={styles.btngrad}> Siguiente</button>
         
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
