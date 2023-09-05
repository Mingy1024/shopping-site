import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Slide from '../../components/Slider';

const newProduct = [1, 2, 3, 4, 5, 6];

const renderContent = newProduct.map((item, index) => {
  return (
    <Link to="/" className="cardLink" key={index}>
      <div className="card m-2 shadow-sm cardScale spotCard">
        <img
          src="https://images.unsplash.com/photo-1629077007578-a36bb1056b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="card-img-top spotImg"
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title fw-bold">商品名稱</h4>
          <p className="card-text description">商品敘述</p>
          <p className="d-flex align-items-center mb-0">
            <span className="sortIcon me-2"></span>
            <span className="d-block">種類</span>
          </p>
        </div>
      </div>
    </Link>
  );
});

export default function Home() {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={require('../../images/banner1.png')}
              alt=""
              className="w-100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../images/banner2.png')}
              alt=""
              className="w-100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../images/banner3.png')}
              alt=""
              className="w-100"
            />
          </SwiperSlide>
        </Swiper>
        <div className="intro my-5">
          <div class="row justify-content-center flex-row-reverse g-4 mb-5">
            <div class="col-lg-5 col-md-6 d-flex align-items-center">
              <div>
                <h2 class="fw-bold mb-3">芬芳藝術：奢華香水的自信魅力</h2>
                <p class="lh-lg text-secondary mb-0">
                  這款香水，奢華如藝術品，散發誘人芬芳。從橙花清新、玫瑰柔和，到龍涎香深沉，每滴香氛皆詩情畫意。擁有它，自信優雅凸顯。無論約會或重要場合，增添魅力、難忘印象。讓香水成為獨特標誌，散發個性魅力。享受芬芳，感受生活！
                </p>
              </div>
            </div>
            <div class="col-lg-5 col-md-6 d-flex align-items-center">
              <img
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="w-100 shadow"
              />
            </div>
          </div>
          <div class="row justify-content-center g-4">
            <div class="col-lg-5 col-md-6 d-flex align-items-center">
              <div>
                <h2 class="fw-bold mb-3">香氛魔法：奢華優雅的獨特印記</h2>
                <p class="lh-lg text-secondary mb-0">
                  品味這款香水，它融合華麗和優雅，是奢華的藝術品。每滴香氛如花朵倩影，從茉莉到玫瑰再到鳶尾，譜成詩意。如魔咒，賦予無限自信和魅力。日常或特別場合，它是您的秘密武器，散發獨特魅力，成為個性代表，讓世界記住您的香氛印記。感受芬芳，享受獨特。
                </p>
              </div>
            </div>
            <div class="col-lg-5 col-md-6 d-flex align-items-center">
              <img
                src="https://images.unsplash.com/photo-1458538977777-0549b2370168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt=""
                className="w-100 shadow"
              />
            </div>
          </div>
        </div>
        <div className="newProduct">
          <h2 className="fw-bold">最新商品</h2>
          <Slide renderContent={renderContent}></Slide>
        </div>
      </div>
      <div className="comment bg-light py-5">
        <div className="container">
          <h2 className="mb-5 fw-bold">聽聽顧客們怎麼說</h2>
          <div className="row">
            <div className="col-md-9 col-lg-7 d-flex align-items-center p-3">
              <img
                src={require('../../images/headshot1.png')}
                alt=""
                className="me-5"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <div className=" p-3 d-flex align-items-center w-100 commentBoxLeft">
                <p className="mb-0">
                  這香水令人陶醉！橙花、玫瑰和龍涎香的混合讓我愛不釋手，增添自信。朋友們紛紛問我用的是什麼香水，讓我成為焦點。日常或特殊場合都適用，是我的必備。要獨特魅力，它是首選！
                </p>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-md-9 col-lg-7 d-flex flex-row-reverse align-items-center p-3">
              <img
                src={require('../../images/headshot2.png')}
                alt=""
                className="ms-5"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <div className="p-3 d-flex align-items-center w-100 commentBoxRight">
                <p className="mb-0">
                  這香水令人陶醉！橙花、玫瑰和龍涎香的混合讓我愛不釋手，增添自信。朋友們紛紛問我用的是什麼香水，讓我成為焦點。日常或特殊場合都適用，是我的必備。要獨特魅力，它是首選！
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 col-lg-7 d-flex align-items-center p-3">
              <img
                src={require('../../images/headshot3.png')}
                alt=""
                className="me-5"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <div className="p-3 d-flex align-items-center w-100 commentBoxLeft">
                <p className="mb-0">
                  這香水令人陶醉！橙花、玫瑰和龍涎香的混合讓我愛不釋手，增添自信。朋友們紛紛問我用的是什麼香水，讓我成為焦點。日常或特殊場合都適用，是我的必備。要獨特魅力，它是首選！
                </p>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-md-9 col-lg-7 d-flex flex-row-reverse align-items-center p-3">
              <img
                src={require('../../images/headshot4.png')}
                alt=""
                className="ms-5"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <div className="p-3 d-flex align-items-center w-100 commentBoxRight">
                <p className="mb-0">
                  這香水令人陶醉！橙花、玫瑰和龍涎香的混合讓我愛不釋手，增添自信。朋友們紛紛問我用的是什麼香水，讓我成為焦點。日常或特殊場合都適用，是我的必備。要獨特魅力，它是首選！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
