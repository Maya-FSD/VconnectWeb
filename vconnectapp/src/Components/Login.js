import React, { useState } from "react";
import API from "../api/apiHelper";
import { importJWK, CompactEncrypt } from "jose";
import "./../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleLogin = async () => {
  setError("");
  if (!username || !password) return setError("Please enter credentials");

  try {
    setLoading(true);
    console.log("Attempting to login with:", username);

    // ✅ Step 1: Get public key (just to extract `kid`)
    const publicKeyResponse = await API.get("auth/public-keys");
    const key = publicKeyResponse?.data?.keys?.[0];

    if (!key?.kid) {
      throw new Error("Unable to fetch key identifier (kid).");
    }

    // ✅ Step 2: Send plain password + valid `kid`
    const response = await API.post("auth/login", {
      username: username.trim(),
      encryptedPassword: password.trim(), // plain password
      kid: key.kid
    });

    console.log("Login Response:", response);
const { token, user } = response.data;
localStorage.setItem("accessToken", token);
localStorage.setItem("user", JSON.stringify(user));

if (response?.data?.token) {
  localStorage.setItem("accessToken", response.data.token);
  alert("Login Successful!");
  // navigate to dashboard here
} else {
  throw new Error("Login failed");
}


  } catch (err) {
    console.error("Login Error:", err);
    setError(err?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username or Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </button>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default Login;
