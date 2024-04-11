import "./Login.css";
import headLogin from "../../assets/headLogin.jpg";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className="container_login">
      <section>
        <img src={headLogin} alt="ACAF" />
        <form>
          <div>
            <label forHtml="email">Email</label>
            <input type="email" name="email" placeholder="hola@hola.com" />
          </div>
          <div>
            <label forHtml="password">Contraseña</label>
            <input type="password" name="password" placeholder="**********" />
          </div>
          <Link to="/homeAdmin"><button type="submit">Entra</button></Link>
        </form>
        <Link to="#">¿Has perdido la contraseña?</Link>
      </section>
    </main>
  );
};
