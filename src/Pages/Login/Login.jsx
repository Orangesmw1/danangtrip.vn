import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const Login = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [typePass, setTypePass] = useState("password");

  const { register, handleSubmit } = useForm();

  const handleShowPass = (isShowPass) => {
    if (isShowPass) {
      setTypePass("text");
      setIsShowPass(true);
    } else {
      setTypePass("password");
      setIsShowPass(false);
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className="login font-serif">
      <div className="title-login">
        <h2>Đăng ký thành viên</h2>
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
