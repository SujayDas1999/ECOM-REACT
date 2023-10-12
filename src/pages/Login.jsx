import React, { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import userDetails from "../usercreds.json";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //const state = useSelector((state) => state.handleUserDetails);
  const dispatch = useDispatch();

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkForValidEmail = (e) => {
    const found = userDetails.find((emp) => emp.userName === email);
    return found;
  };

  const navigateToHome = () => {
    dispatch(loginUser(email));
    toast(`Welcome ${email}!`);
    navigate("/");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const userDetail = checkForValidEmail();

    if (userDetail) {
      userDetail.password === password
        ? navigateToHome()
        : toast("Wrong credentials");
    } else {
      toast("Wrong credentials");
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  value={email}
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={updateEmail}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  value={password}
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={updatePassword}
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  onClick={handleLogin}
                  class="my-2 mx-auto btn btn-dark"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
