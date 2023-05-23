import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [typeDate, setTypeDate] = useState("text");
  const [isShowPass, setIsShowPass] = useState(false);
  const [typePass, setTypePass] = useState("password");
  const [isShowPassConfirm, setIsShowPassConfirm] = useState(false);
  const [typePassConfirm, setTypePassConfirm] = useState("password");

  const handleShowPass = (isShowPass) => {
    if (isShowPass) {
      setTypePass("text");
      setIsShowPass(true);
    } else {
      setTypePass("password");
      setIsShowPass(false);
    }
  };

  const handleShowPassConfirm = (isShowPassConfirm) => {
    if (isShowPassConfirm) {
      setTypePassConfirm("text");
      setIsShowPassConfirm(true);
    } else {
      setTypePassConfirm("password");
      setIsShowPassConfirm(false);
    }
  };

  const handleSetType = () => {
    setTypeDate("date");
  };

  return (
    <div className="register font-serif">
      <div className="title-register">
        <h2>Đăng ký thành viên</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("fullName")} placeholder="Họ và tên" />

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

        <div className="form-password-confirm">
          <input
            {...register("confirmPassword")}
            placeholder="Xác nhận mật khẩu"
            type={typePassConfirm}
          />

          {!isShowPassConfirm ? (
            <EyeInvisibleOutlined onClick={() => handleShowPassConfirm(true)} />
          ) : (
            <EyeOutlined onClick={() => handleShowPassConfirm(false)} />
          )}
        </div>

        <input
          {...register("phoneNumber")}
          placeholder="Số điện thoại"
          id="text"
        />

        <input
          {...register("dateOfBirth")}
          placeholder="Ngày sinh"
          id="date"
          type={typeDate}
          onClick={() => handleSetType()}
        />

        <select {...register("gender")}>
          <option value="female">Nam</option>
          <option value="male">Nữ</option>
          <option value="other">Khác</option>
        </select>

        <div className="box-checkbox ">
          <input type="checkbox" />
          <h6>Chấp nhận điều khoản sử dụng</h6>
        </div>

        <div className="btn">
          <input type="submit" value="Đăng ký" className="btn-register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
