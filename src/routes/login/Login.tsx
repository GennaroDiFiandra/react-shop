import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/services/";
import { Notification } from "@/components/";
import styles from "./Login.module.scss";

interface Admin {
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();

  const isLoggedIn = useAuthStore( state => state.isLoggedIn );
  const isError = useAuthStore( state => state.isError );
  const login = useAuthStore( state => state.login );

  const [admin, setAdmin] = useState<Admin>({ email: "", password: "" });

  function inputHandler(event:React.ChangeEvent<HTMLInputElement>) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    setAdmin(state => ({ ...state, [name]: value }));
  }

  function loginFormHandler(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    login(admin.email, admin.password);
  }

  useEffect( () => {
    isLoggedIn && navigate("/shop");
  }, [isLoggedIn] );

  return (
    <>
      { isError && <Notification type="failure" message="Access denied" /> }

      <form className={styles["login-form"]} onSubmit={event => loginFormHandler(event)}>
        <div>
          <label htmlFor="email" className={styles["login-form-label"]}>Email</label>
          <input type="email" name="email" id="email" autoComplete="username" required onChange={event => inputHandler(event)} />
        </div>
        <div>
          <label htmlFor="password" className={styles["login-form-label"]}>Password</label>
          <input type="password" name="password" id="password" autoComplete="current-password" required onChange={event => inputHandler(event)} />
        </div>
        <button type="submit" className={styles["login-form-cta"]}>Login</button>
      </form>

      <Notification type="info" message="This login is for administrators" />
    </>
  )
}