import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import styles from './login.module.css'
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const schema = Yup.object().shape({
    email: Yup.string().email('Ingresa un email válido').required('El email es requerido'),
    password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida'),
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await schema.validate({ email, password });

      const response = await fetch(`${process.env.URL_API}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }

      localStorage.setItem('isLoggedIn', 'true');
      router.push('/perfil');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleForm} className={styles.formContainer}>
      <Image src={'/img/PropuestaBanner.png'} width={500} height={200} />
      <h2 className={styles.tittle}>Login</h2>
      <fieldset className={styles.fields}>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Escribe tu email'
        />
      </fieldset>
      <fieldset className={styles.fields}>
        <label htmlFor="password">
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          placeholder='Escribe tu contraseña'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
         <span onClick={toggleShowPassword}>{showPassword ? '🔒' : '👀'}</span>
      </fieldset>
      <button className={styles.btngrad} type="submit">Continuar</button>
      {error && <p>{error}</p>}
      <p>
            ¿No tienes una cuenta?
            <Link href="/register"> Regístrate</Link>
      </p>
    </form>
    
  );
};

export default Login;
