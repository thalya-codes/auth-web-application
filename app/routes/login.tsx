import { useState, type FormEventHandler } from "react";
import { useNavigate } from "react-router";
import { createAccount } from "~/src/services/createAccount";
import { login } from "~/src/services/login";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const navigateTo = useNavigate()

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const data = await login(formData);
    
    if (data.accessToken)
    {  localStorage.setItem("access_token", data.accessToken);}

    navigateTo("/tasks");
    
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <br />

      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={({ target: { value } }) =>
            setFormData((data) => ({ ...data, email: value }))
          }
        />
        <br />

        <label htmlFor="">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={({ target: { value } }) =>
            setFormData((data) => ({ ...data, password: value }))
          }
        />
      </div>

      <button>Login</button>
    </form>
  );
}
