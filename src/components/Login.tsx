import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"


export const Login: React.FC = () => {
  const navigate = useNavigate()
  const [nameInput, setLogin] = useState("");
  const [passwordInput, setPassword] = useState('')
  const { login } = useActions();
  const data = useSelector(
    (state: any) => state.login.data
  );

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(nameInput, passwordInput)
    navigate('/room')
    
  };
  return (
    <>
    <h1>Login</h1>
      <form>
        <div>
          Name
          <input value={nameInput} onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div>
          Password <input type="password" value={passwordInput} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={submitHandler}>Submit</button>
      </form>
      {data&& <div>Hello: {data.name}</div>}
    </>
  );
};
