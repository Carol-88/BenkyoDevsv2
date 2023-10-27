import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

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
    <form onSubmit={handleForm}>
      <Image src={''} width={300} height={200} />
      <h2>Login</h2>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">
          Contraseña:
          <span onClick={toggleShowPassword}>{showPassword ? '🔒' : '👀'}</span>
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </fieldset>
      <button type="submit">Continuar</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
