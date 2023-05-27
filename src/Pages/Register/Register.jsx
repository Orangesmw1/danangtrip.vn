import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notify, registerUser } from "../../redux/slice/userSlice";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowPassConfirm, setIsShowPassConfirm] = useState(false);

  const [typeDate, setTypeDate] = useState("text");
  const [typePass, setTypePass] = useState("password");
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

  const onSubmit = async (data) => {
    if (data) {
      axios({
        method: "post",
        url: "http://localhost:5000/api/v1/auth/register",
        data: {
          name: data?.name,
          email: data?.email,
          password: data?.password,
          phone: data?.phone,
          birth: data?.birth,
        },
      }).then((response) => {
        if (response.data.access_token) {
          dispatch(registerUser(response.data));
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        } else {
          if (data.password === data.confirmPassword) {
            notify("error", "Email đã sử dụng");
          }
        }
      });
    }
  };

  return (
    <div className="register font-serif">
      <div className="title-register">
        <h2>Đăng ký thành viên</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: true,
            maxLength: 30,
            minLength: 3,
            pattern: /^([^0-9]*)$/,
          })}
          placeholder="Họ và tên"
        />
        {errors.name?.type === "required" && (
          <span className="error"> Không được để trống họ & tên</span>
        )}
        {errors.name?.type === "maxLength" && (
          <span className="error"> Tối đa 30 kí tự</span>
        )}
        {errors.name?.type === "minLength" && (
          <span className="error">Tối đa 3 kí tự</span>
        )}
        {errors.name?.type === "pattern" && (
          <span className="error">Không được nhập kí tự số</span>
        )}

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

        <div className="form-password-confirm">
          <input
            {...register("confirmPassword", { required: true })}
            placeholder="Xác nhận mật khẩu"
            type={typePassConfirm}
          />

          {!isShowPassConfirm ? (
            <EyeInvisibleOutlined onClick={() => handleShowPassConfirm(true)} />
          ) : (
            <EyeOutlined onClick={() => handleShowPassConfirm(false)} />
          )}
        </div>
        {errors.confirmPassword && (
          <span className="error"> Không được để trống mật khẩu</span>
        )}
        {watch("confirmPassword") !== watch("password") &&
        getValues("confirmPassword") ? (
          <span className="error"> Vui lòng nhập đúng mật khẩu</span>
        ) : null}

        <input
          {...register("phone", {
            required: true,
            pattern: new RegExp("^[0-9]+$"),
          })}
          placeholder="Số điện thoại"
          id="text"
        />
        {errors.phone?.type === "required" && (
          <span className="error"> Không được để trống số điện thoại</span>
        )}
        {errors.phone?.type === "pattern" && (
          <span className="error"> Vui lòng nhập đúng định dạng</span>
        )}

        <input
          {...register("birth", { required: true })}
          placeholder="Ngày sinh"
          id="date"
          type={typeDate}
          onClick={() => handleSetType()}
        />
        {errors.birth && (
          <span className="error"> Không được để trống ngày sinh</span>
        )}

        <select {...register("gender", { required: true })}>
          <option value="female">Nam</option>
          <option value="male">Nữ</option>
          <option value="other">Khác</option>
        </select>
        {errors.gender && (
          <span className="error"> Không được để trống giới tính</span>
        )}

        <div className="box-checkbox ">
          <input
            type="checkbox"
            {...register("checkbox", { required: true })}
          />
          <h6>Chấp nhận điều khoản sử dụng</h6>
        </div>
        {errors.checkbox && (
          <span className="error"> Đồng ý điều khoản sử dụng </span>
        )}

        <div className="btn">
          <input type="submit" value="Đăng ký" className="btn-register" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
