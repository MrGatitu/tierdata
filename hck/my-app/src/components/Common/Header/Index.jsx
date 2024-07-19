import React from 'react';
import './Bootstrap.min.css';
import './Style.css'; 
import carousel1 from './Images/carousel-1.jpg';
import carousel2 from './Images/carousel-2.jpg';

const Header = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
            <h1 className="text-primary">
              <i className="fas fa-hand-holding-water me-3"></i>Smart-Water
              
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <div className="d-none d-xl-flex me-3">
              <div className="d-flex flex-column pe-3 border-end border-primary">
                <span className="text-body">Delivery Free</span>
                <a href="tel:+254795732672">
                  <span className="text-primary">Free: +254 795732672</span>
                </a>
              </div>
            </div>
            <a href="#" className="btn btn-primary rounded-pill d-inline-flex flex-shrink-0 py-2 px-4">
              Order Now
            </a>
          </div>
        </nav>
        <div className="carousel-header">
          <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src={carousel1} className="img-fluid w-100" alt="Image" />
                <div className="carousel-caption-1">
                  <div className="carousel-caption-1-content" style={{ maxWidth: '900px' }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4 fadeInLeft animated"
                      data-animation="fadeInLeft"
                      data-delay="1s"
                      style={{ animationDelay: '1s', letterSpacing: '3px' }}
                    >
                      Importance life
                    </h4>
                    <h1
                      className="display-2 text-capitalize text-white mb-4 fadeInLeft animated"
                      data-animation="fadeInLeft"
                      data-delay="1.3s"
                      style={{ animationDelay: '1.3s' }}
                    >
                      Always Want Safe Water For Healthy Life
                    </h1>
                    <div className="carousel-caption-1-content-btn">
                      <a className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2" href="#">
                        Sign Up
                      </a>
                      <a className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2" href="#">
                        Sign In
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={carousel2} className="img-fluid w-100" alt="Image" />
                <div className="carousel-caption-2">
                  <div className="carousel-caption-2-content" style={{ maxWidth: '900px' }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4 fadeInRight animated"
                      data-animation="fadeInRight"
                      data-delay="1s"
                      style={{ animationDelay: '1s', letterSpacing: '3px' }}
                    >
                      Importance life
                    </h4>
                    <h1
                      className="display-2 text-capitalize text-white mb-4 fadeInRight animated"
                      data-animation="fadeInRight"
                      data-delay="1.3s"
                      style={{ animationDelay: '1.3s' }}
                    >
                      Always Want Safe Water For Healthy Life
                    </h1>
                    <div className="carousel-caption-2-content-btn fadeInRight animated">
                      <a className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2" href="#">
                        Sign Up
                      </a>
                      <a className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2" href="#">
                        Sign In
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
