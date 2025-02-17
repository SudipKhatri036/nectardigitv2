import { FaEnvelope, FaLock } from "react-icons/fa6";
import "./Login.css";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../../api/PostApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginDetail, setLoginDetails] = useState({
    email: "nectardigit@gmail.com",
    password: "admin123",
  });
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const handleLoginInput = (e) => {
    setLoginDetails({ ...loginDetail, [e.target.name]: e.target.value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    //   axios.get("/sanctum/csrf-cookie").then((response) => {
    //     axios.post(`https://nectardigit.com/api/login`, data).then((res) => {
    //       if (res.data.status === 200) {
    //         localStorage.setItem("auth_token", res.data.token);
    //         localStorage.setItem("auth_name", res.data.username);
    //         swal("success", res.data.message, "success");
    //         history.push("/");
    //       } else if (res.data.status === 401) {
    //         swal("Warning", res.data.message, "Warning");
    //       } else {
    //         setLoginDetails({
    //           ...loginDetail,
    //           error_list: res.data.validate_errors,
    //         });
    //       }
    //     });
    //   });

    try {
      const res = await axiosInstance.post("/login", loginDetail);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.data.token);

        window.location.href = "https://www.nectardigit.com/admin";
      }
      console.log(res);
      // setToken(res?.data?.data?.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="contents">
        <form id="login-form" onSubmit={loginSubmit}>
          <input
            type="hidden"
            name="_token"
            value="Ut9RMN5jil0hzGOKZDS487A7VkgopEWqxT0tKbvh"
          />
          <div className="d-flex justify-content-center">
            <a>
              <img
                src="/images/site-logo.png"
                className="img-fluid"
                alt="Logo"
              />
            </a>
          </div>

          <h2 className="login-title">Admin Login</h2>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text  ">
                  <FaEnvelope />
                </div>
              </div>
              <input
                className="form-control  login-form-input"
                type="text"
                name="email"
                placeholder="Email or Mobile"
                autoComplete="off"
                value={loginDetail.email}
                onChange={handleLoginInput}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text ">
                  <FaLock />
                </div>
              </div>
              <input
                className="form-control login-form-input"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={loginDetail.password}
                onChange={handleLoginInput}
              />
            </div>
          </div>
          {/* <div class="form-group d-flex justify-content-between">
            <div class="custom-control custom-checkbox">
              <label class="checkbox-container">
                <input class="custom-checkbox" type="checkbox" />
                <span class="checkmark"></span>
                Remember me
              </label>
            </div>
            <a href="https://nectardigit.com/forgot-password">
              Forgot password?
            </a>
          </div> */}
          <div className="form-group">
            <button
              className="btn btn-primary btn-block btn-flat"
              type="submit"
            >
              <FaSignInAlt /> Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
