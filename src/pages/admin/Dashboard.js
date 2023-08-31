import { useEffect, useReducer } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import Message from '../../components/Message';
import {
  MessageContext,
  messageReducer,
  initState,
} from '../../store/messageStore';

export default function Dashboard() {
  const navigate = useNavigate();
  const reducer = useReducer(messageReducer, initState);

  const logout = () => {
    document.cookie = document.cookie = 'hexToken=;';
    navigate('/login');
  };

  // 取出 token
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('hexToken='))
    ?.split('=')[1];

  axios.defaults.headers.common['Authorization'] = token;

  useEffect(() => {
    if (!token) {
      return navigate('/login');
    }
    (async () => {
      try {
        await axios.post('/v2/api/user/check');
      } catch (error) {
        if (error.response.data.success) {
          navigate('/login');
        }
      }
    })();
  }, [navigate, token]);

  return (
    <MessageContext.Provider value={reducer}>
      <Message></Message>
      <nav className="navbar navbar-expand-lg bg-darkBlue p-3">
        <div className="container-fluid">
          <h1 className="text-white mb-0 h3">後台管理系統</h1>
          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-sm btn-dark logoutBtn"
                onClick={logout}
              >
                登出
                <i className="bi bi-box-arrow-right ps-2"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex" style={{ minHeight: 'calc(100vh - 56px)' }}>
        <div className="bg-dark" style={{ width: '150px' }}>
          <ul className="list-group list-group-flush">
            <NavLink
              className="list-group-item list-group-item-action py-3"
              to="/admin/products"
            >
              <i className="bi bi-cup-fill me-2" />
              產品列表
            </NavLink>
            <NavLink
              className="list-group-item list-group-item-action py-3"
              to="/admin/coupons"
            >
              <i className="bi bi-ticket-perforated-fill me-2" />
              優惠卷列表
            </NavLink>
            <NavLink
              className="list-group-item list-group-item-action py-3"
              to="/admin/orders"
            >
              <i className="bi bi-receipt me-2" />
              訂單列表
            </NavLink>
          </ul>
        </div>
        <div className="bg-lightBlue" style={{ width: 'calc(100% - 150px)' }}>{token && <Outlet />}</div>
      </div>
    </MessageContext.Provider>
  );
}
