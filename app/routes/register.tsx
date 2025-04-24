import { useState } from "react";
import { useNavigate } from "react-router";
import { createAccount } from "~/src/services/createAccount";

export default function CreateAccountPage() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  
  const navigateTo = useNavigate();


  return (
    <form onSubmit={async (e) => {
      e?.preventDefault()
       await createAccount(formData);

       setTimeout(() => {
         navigateTo("/login");
       }, 1000);
    }}>
      <h1>Create an account</h1>
      <br />

      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={({ target: { value } }) =>
            setFormData((data) => ({ ...data, name: value }))
          }
        />
        <br />

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

      <button>Create</button>
    </form>
  );
}
