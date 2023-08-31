import { useEffect, useRef, useState, useContext } from 'react';
import axios from 'axios';
import CouponModal from '../../components/CouponModal';
import DeleteModal from '../../components/DeleteModal';
import Pagination from '../../components/Pagination';
import { Modal } from 'bootstrap';
import {
  MessageContext,
  handleSuccessMessage,
  handleErrorMessage,
} from '../../store/messageStore';

export default function AdminCoupons() {
  const [coupons, setCoupons] = useState([]);
  const [pagination, setPagination] = useState({});
  const couponModal = useRef(null);
  const deleteModal = useRef(null);

  const [type, setType] = useState('create');
  const [tempCoupon, setTempCoupon] = useState({});
  const [, dispatch] = useContext(MessageContext);

  useEffect(() => {
    couponModal.current = new Modal('#productModal', {
      backdrop: 'static',
    });
    deleteModal.current = new Modal('#deleteModal', {
      backdrop: 'static',
    });
    getCoupons();
  }, []);

  const getCoupons = async (page = 1) => {
    const res = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupons?page=${page}`
    );
    console.log(res);
    setCoupons(res.data.coupons);
    setPagination(res.data.pagination);
  };

  const openCouponModal = (type, item) => {
    setType(type);
    setTempCoupon(item);
    couponModal.current.show();
  };

  const closeModal = () => {
    couponModal.current.hide();
  };

  const openDeleteModal = (product) => {
    setTempCoupon(product);
    deleteModal.current.show();
  };

  const closeDeleteModal = () => {
    deleteModal.current.hide();
  };

  const deleteCoupon = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${id}`
      );
      if (res.data.success) {
        getCoupons();
        closeDeleteModal();
        handleSuccessMessage(dispatch, res);
      }
    } catch (error) {
      console.log(error);
      handleErrorMessage(dispatch, error);
    }
  };

  const convertDate = (date) => {
    const result = `${date.getFullYear().toString()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;

    return result;
  };

  return (
    <div className="p-3">
      <CouponModal
        closeModal={closeModal}
        getCoupons={getCoupons}
        tempCoupon={tempCoupon}
        type={type}
      ></CouponModal>
      <DeleteModal
        close={closeDeleteModal}
        text={tempCoupon.title}
        id={tempCoupon.id}
        handleDelete={deleteCoupon}
      ></DeleteModal>
      <h3>優惠券列表</h3>
      <hr />
      <div className="text-end">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => openCouponModal('create', {})}
        >
          建立新優惠券
        </button>
      </div>
      <div className="p-3 bg-white tableBlock tableOverflow mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">標題</th>
              <th scope="col">折扣</th>
              <th scope="col">到期日</th>
              <th scope="col">優惠碼</th>
              <th scope="col">啟用狀態</th>
              <th scope="col">編輯</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.percent}</td>
                  <td>{convertDate(new Date(product.due_date))}</td>
                  <td>{product.code}</td>
                  <td>{product.is_enabled ? '啟用' : '未啟用'}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => openCouponModal('edit', product)}
                    >
                      編輯
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm ms-2"
                      onClick={() => openDeleteModal(product)}
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Pagination
          pagination={pagination}
          changePage={getCoupons}
        ></Pagination>
      </div>
    </div>
  );
}
