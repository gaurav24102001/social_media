import './login.css';
import { useRef, useContext } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from './../../context/AuthContext';
import { CircularProgress } from '@mui/material';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <form className="loginRight" onSubmit={handleClick}>
          <div className="loginBox">
            <input
              placeholder="Email"
              className="loginInput"
              type="email"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              ref={password}
              required
              minLength="6"
            />

            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress style={{ color: 'white', size: '2 0px' }} />
              ) : (
                'Log In'
              )}
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress style={{ color: 'white', size: '2 0px' }} />
              ) : (
                'Create a New Account'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
