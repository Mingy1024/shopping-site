import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const [loginState, setLoginState] = useState({});

  const submit = async (e) => {
    try {
      const res = await axios.post('/v2/admin/signin', data);
      const { token, expired } = res.data;
      console.log(res.data);
      // 儲存 token
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
      if (res.data.success) {
        navigate('/admin/products');
      }
    } catch (error) {
        setLoginState(error.response.data);
    }
  };

  return (
    <div className="container-fluid vh-100 bg-lightGray d-flex justify-content-center">
      <div className="login">
        <form className="loginForm p-4">
          <h3 className="h5 mb-3 text-center">管理員登入</h3>
          <div className={`alert alert-danger p-2 ${ loginState.message ? 'd-block' : 'd-none'}`} role="alert">
            {loginState.message}
          </div>
          <input
            id="email"
            className="form-control mb-3"
            name="username"
            type="email"
            placeholder="輸入電子信箱"
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control mb-3"
            name="password"
            id="password"
            placeholder="輸入密碼"
            onChange={handleChange}
          />
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={submit}
          >
            登入
          </button>
        </form>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mt-5">返回</button>
        </div>
      </div>
    </div>
  );
}
