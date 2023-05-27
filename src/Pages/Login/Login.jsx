import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, notify } from "../../redux/slice/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const userRegister = useSelector((state) => state.user.userRegister);

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
          setTimeout(() => {
            navigate("/");
          }, 1500);
          localStorage.setItem("userLogin", JSON.stringify(response.data));
        } else {
          if (response.data.mes === "Password wrong") {
            notify("error", "Sai mật khẩu");
          } else {
            notify("error", "Tài khoản không tồn tại");
          }
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
        <input
          {...register("email", {
            required: true,
            pattern: new RegExp("gmail.com$"),
          })}
          placeholder="Email"
        />
        {errors.email?.type === "required" && (
          <span className="error"> Không được để trống email</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="error">Vui lòng nhập đúng định dạng @gmail.com</span>
        )}

        <div className="form-password">
          <input
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Mật khẩu"
            type={typePass}
          />
          {!isShowPass ? (
            <EyeInvisibleOutlined onClick={() => handleShowPass(true)} />
          ) : (
            <EyeOutlined onClick={() => handleShowPass(false)} />
          )}
        </div>
        {errors.password?.type === "required" && (
          <span className="error"> Không được để trống mật khẩu</span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="error"> Tối đa 6 kí tự</span>
        )}

        <div className="btn">
          <input type="submit" value="Đăng nhập" className="btn-login" />
        </div>
      </form>
      <ToastContainer />;
    </div>
  );
};

export default Login;
