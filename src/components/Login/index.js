import { useState } from "react";
import styles from "./Login.module.css";

function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const entrar = (e) => {
        e.preventDefault();
        console.log("Email", email)
        console.log("Senha", senha)
    }

    return (
        <section className={styles.container}>
            <div className={styles.loginbox}>
                <h2>Login</h2>
                <form>
                    <div>
                        <label for="Email">Email: *</label>
                        <input
                            value={email}
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            required
                        />
                    </div>
                    <div>
                        <label for="Senha">Senha: *</label>
                        <input
                            value={senha}
                            type="password"
                            id="password"
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                            required 
                            />
                    </div>
                    <div className={styles.btn}>
                        <button onClick={entrar} type="submit" className={styles.btnent}>Entrar</button>
                        <button type="submit" className={styles.btncad}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;