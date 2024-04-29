import "./Login.css";
import headLogin from "../../assets/img/headLogin.jpg";
import { useState } from "react";
import config from "../../../config"; 
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === config.adminEmail && password === config.adminPassword) {
      navigate("/homeAdmin");
    } else {
      setError("Correo electrónico o contraseña incorrectos");
    }
  };

  return (
    <main className="container_login">
      <section>
        <img src={headLogin} alt="ACAF" />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="hola@hola.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Entrar</button>
          {error && <p>{error}</p>}
        </form>
        <Link to="#">¿Has perdido la contraseña?</Link>
      </section>
    </main>
  );
};
