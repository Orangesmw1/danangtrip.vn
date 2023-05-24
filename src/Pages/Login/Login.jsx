import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [isShowPass, setIsShowPass] = useState(false);
  const [typePass, setTypePass] = useState("password");

  const handleShowPass = (isShowPass) => {
    if (isShowPass) {
      setTypePass("text");
      setIsShowPass(true);
    } else {
      setTypePass("password");
      setIsShowPass(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userLogin")) {
      navigate("/");
    }
  }, []);

  const postUser = async (email, password) => {
    axios
      .post("http://localhost:5000/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.access_token) {
          dispatch(loginUser(response.data));
          navigate("/");
          localStorage.setItem("userLogin", JSON.stringify(response.data));
        }
      });
  };

  const onSubmit = ({ email, password }) => {
    postUser(email, password);
  };

  return (
    <div className="login font-serif">
      <div className="title-login">
        <h2>Đăng nhập tài khoản</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Email" />
        <div className="form-password">
          <input
            {...register("password")}
            placeholder="Mật khẩu"
            type={typePass}
          />

          {!isShowPass ? (
            <EyeInvisibleOutlined onClick={() => handleShowPass(true)} />
          ) : (
            <EyeOutlined onClick={() => handleShowPass(false)} />
          )}
        </div>
        <div className="btn">
          <input type="submit" value="Đăng nhập" className="btn-login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
