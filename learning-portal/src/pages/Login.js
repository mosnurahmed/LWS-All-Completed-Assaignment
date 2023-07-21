import learningPortal from "../assets/image/learningportal.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useLoginMutation } from "../features/auth/authApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, { data, error: responseError }] = useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      navigate("/leaderBoard");
    }
  }, [data, responseError, navigate]);

  const loginHandle = (e) => {
    e.preventDefault();

    setError("");
    login({
      email,
      password,
    });
  };

  return (
    <>
      <section className="py-6 bg-primary h-screen grid place-items-center">
        <div className="mx-auto max-w-md px-5 lg:px-0">
          <div>
            <img className="h-12 mx-auto" src={learningPortal} alt="LearningPortal" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">Sign in to Student Account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={loginHandle}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="login-input rounded-t-md"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="login-input rounded-b-md"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link to="/registration" className="font-medium text-violet-600 hover:text-violet-500">
                  Create New Account
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Sign in
              </button>
            </div>
            {error !== "" && <div>{error}</div>}
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
