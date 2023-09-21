import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-riceYellow shadow-sm sticky-top py-0">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          <img
            src={require('../images/logo.png')}
            style={{ height: '50px' }}
            alt=""
          />
        </a>
        <div className="d-flex align-items-center d-lg-none">
          <a href="#/" className="ms-3">
            <i class="bi bi-bookmark-heart fs-3 text-dark"></i>
          </a>
          <a href="#/" className="mx-3">
            <i class="bi bi-cart3 fs-3 text-dark"></i>
          </a>
          <button
            className="navbar-toggler my-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-center py-4 active"
                aria-current="page"
                to='/'
              >
                首頁
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-center py-4" to='products'>
                本店商品
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-center py-4" to='products'>
                常見問題
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-center py-4" to='products'>
                購物須知
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-center py-4" to='products'>
                最新消息
              </NavLink>
            </li>
          </ul>
          <div class="input-group search ms-auto">
            <input
              type="text"
              class="form-control"
              placeholder="找商品..."
              aria-label="找商品..."
              aria-describedby="searchButton"
            />
            <button class="btn btn-secondary" type="button" id="searchButton">
              <i class="bi bi-search"></i>
            </button>
          </div>
          <a href="#/" className="fs-3 text-dark ms-3 d-none d-lg-block">
            <i class="bi bi-bookmark-heart"></i>
          </a>
          <a href="#/" className="fs-3 text-dark ms-3 d-none d-lg-block">
            <i class="bi bi-cart3"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
