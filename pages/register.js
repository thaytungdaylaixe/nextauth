import { useState } from "react";
import axios from "axios";

const register = () => {
  const [sdt, setSdt] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();

    console.log(sdt, password);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/user/register`,
      { sdt, password },
      config
    );
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <h1>Register</h1>
        <input value={sdt} onChange={(e) => setSdt(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default register;
