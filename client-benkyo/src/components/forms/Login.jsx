
import { useState } from 'react';
import Image from 'next/image';
//import { logInUserService } from "..";
import { useRouter } from 'next/router';
//import { AuthContext } from "../";
//haría falta crear el authcontext
//los services para recuperar la información del backend

export default function Login() {
    //const navigate = useNavigate();
    //const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [pass, setPass] = useState('password');

    const router = useRouter();
    const verContraseña = () => {
        if (pass === 'password') {
            setPass('text');
        } else {
            setPass('password');
        }
    };

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const user = await fetch(
                'http://localhost:4000/api/v1/user/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                },
            ).then((res) => res.json());

            console.log(user);
            router.push('/perfil');
        } catch (error) {
            setError('Email o password incorrecto', error.message);
        }
    };
    return (
        <form
            onSubmit={handleForm}
        >
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
