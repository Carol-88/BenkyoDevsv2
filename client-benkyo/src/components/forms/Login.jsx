import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [pass, setPass] = useState('password');

  const router = useRouter();
  
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const verContraseña = () => {
    if (pass === 'password') {
        setPass('text');
    } else {
        setPass('password');
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const validForm = await schema.isValid({ email, password });
    if (!validForm) {
      setError("Por favor, verifica los datos ingresados");
      return;
    }

    try {
      const response = await fetch(
          `${process.env.URL_API}/login`,
          {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          },
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }

      localStorage.setItem('isLoggedIn', 'true');
      router.push('/perfil');
    } catch (error) {
      setError('Error de conexión, por favor intente nuevamente');
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
        <label htmlFor="pass">
          Password:
          <span
            onClick={() => {
              verContraseña();
            }}
          >
            {' '}
            {pass == 'text' ? '🔒' : '👀'}
          </span>
        </label>
        <input
          type={pass}
          name="pass"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </fieldset>
      <button>
        Continuar
      </button>
      {error ? <p>{error}</p> : null}
    </form>
  );
}

export default Login