import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
        expiresInMins: 30,
      });

      const { accessToken, refreshToken } = response.data;

      // Save tokens in cookies
      Cookies.set("accessToken", accessToken, { expires: 1 }); // Expires in 1 day
      Cookies.set("refreshToken", refreshToken, { expires: 7 }); // Expires in 7 days

      setError(null);
    } catch (error) {
      // Axios wraps errors differently; use `error.response` for server errors
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : "Something went wrong. Please try again.";
      alert(`Login failed: ${errorMessage}`);
      setError(errorMessage);
    }
  };

  return (
    <div className="default-padding flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sign In to Your Account</h2>

          {error && <p className="text-red-500">{error}</p>}

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              placeholder="Your Username"
              className="input input-bordered input-sm w-full max-w-xs"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered input-sm w-full max-w-xs"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <div className="card-actions justify-end">
            <button
              className="btn btn-primary btn-sm btn-block mt-4"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
