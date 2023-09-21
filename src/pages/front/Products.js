import { NavLink } from 'react-router-dom';

export default function Products() {
  return (
    <>
    <img src="https://images.unsplash.com/photo-1533414765079-4bb015a31395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="" className='banner'/>
    <div className="container productList">
      <div className="row">
        <div className="col-lg-2">
          <ul className="category d-flex d-lg-block justify-content-between">
            <li>
              <NavLink className="categoryItem active" to="a">
                所有商品
              </NavLink>
            </li>
            <li>
              <NavLink className="categoryItem" to="a">
                類別2
              </NavLink>
            </li>
            <li>
              <NavLink className="categoryItem" to="a">
                類別3
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-lg-10">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
            <div className="col">
              <div class="card">
                <div className='position-relative'>
                  <img
                    src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                    class="card-img-top productImg"
                  />
                  <a href="#" class="btn btn-primary addCart">
                    加入購物車
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">香奈兒摩登COCO魅惑印記香水</h5>
                  <p class="card-text mb-0">NT$3990</p>
                  <p class="card-text text-muted lineThrough mb-0">NT$4500</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <div className='position-relative'>
                  <img
                    src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                    class="card-img-top productImg"
                  />
                  <a href="#" class="btn btn-primary addCart">
                    加入購物車
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">香奈兒摩登COCO魅惑印記香水</h5>
                  <p class="card-text mb-0">NT$3990</p>
                  <p class="card-text text-muted lineThrough mb-0">NT$4500</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <div className='position-relative'>
                  <img
                    src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                    class="card-img-top productImg"
                  />
                  <a href="#" class="btn btn-primary addCart">
                    加入購物車
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">香奈兒摩登COCO魅惑印記香水</h5>
                  <p class="card-text mb-0">NT$3990</p>
                  <p class="card-text text-muted lineThrough mb-0">NT$4500</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <div className='position-relative'>
                  <img
                    src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                    class="card-img-top productImg"
                  />
                  <a href="#" class="btn btn-primary addCart">
                    加入購物車
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">香奈兒摩登COCO魅惑印記香水</h5>
                  <p class="card-text mb-0">NT$3990</p>
                  <p class="card-text text-muted lineThrough mb-0">NT$4500</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
