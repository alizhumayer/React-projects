import React, { useState } from "react";
import "../styles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Spacer from "./Spacer";
import { useUtils } from "../context/UtilContext";

function Login() {
  const serverURL = useUtils();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const printValues = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: `${username}`,
      password: `${password}`,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${serverURL}/user/login`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div id="blank"></div>
        <div>please login</div>

        <div className="container" style={{ height: "200px" }}>
          <form onSubmit={printValues}>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              name="username"
              placeholder="Your Username"
              type="text"
            />

            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              placeholder="Your Password"
              type="password"
            />
          </form>
        </div>
        <Spacer />
      </div>
      <Footer />
    </>
  );
}

export default Login;
