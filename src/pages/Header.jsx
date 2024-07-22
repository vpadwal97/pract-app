import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Dropdown from "react-bootstrap/Dropdown";
import { Tabs, Tab } from "react-bootstrap";
import { MdGetApp } from "react-icons/md";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaQuestionCircle,
  FaSearch,
} from "react-icons/fa";
import { FaLocationDot, FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { TbLogin, TbLogout } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import octashopLogo from "../../assets/temp/Octashop-logo.png";
import { TempVariable } from "../constants/TempVariable";
// import GoogleAutocomplete from "../modules/GoogleAutocomplete";

function Header() {
  const [activeKey, setActiveKey] = useState([true]);
  const [activeKeyslick, setActiveKeyslick] = useState([true]);
  const [isSearchPlace, setisSearchPlace] = useState(false);
  const [searchPlace, setSearchPlace] = useState("Kurla");
  const [serviceablePincode, setServiceablePincode] = useState("400070");
  const [cartCount, setCartCount] = useState("+99");

  // const handleMouseEnter = (index) => {
  //   let tempVar = new Array(activeKey.length).fill(false);
  //   tempVar[index] = true;
  //   setActiveKey(tempVar);
  // };

  const handleChange = (index) => {
    let tempVar = new Array(activeKey.length).fill(false);
    tempVar[index] = true;
    setActiveKey(tempVar);
  };

  const header = TempVariable.Header;
  // console.log("header----", header);

  // let mcatNames = [];
  // let subcatNames = [];
  // let subsubcatNames = [];
  // let subsubsubcatNames = [];

  // header.mcat.forEach((mcat) => {
  //   mcatNames.push(mcat.mcatName);
  //   mcat.subcat.forEach((subcat) => {
  //     subcatNames.push(subcat.subcatName);
  //     subcat.subsubcat.forEach((subsubcat) => {
  //       subsubcatNames.push(subsubcat.subsubcatName);
  //       subsubcat.subsubsubcat.forEach((subsubsubcat) => {
  //         subsubsubcatNames.push(subsubsubcat.subsubsubcatName);
  //       });
  //     });
  //   });
  // });

  // console.log("mcatNames:", mcatNames);
  // console.log("subcatNames:", subcatNames);
  // console.log("subsubcatNames:", subsubcatNames);
  // console.log("subsubsubcatNames:", subsubsubcatNames);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    // speed: 500,
    draggable: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // variableWidth: true,
    responsive: [
      {
          breakpoint: 1140,
          settings: {
             
              slidesToScroll: 1,
              
          }
      },
      {
          breakpoint: 1024,
          settings: {
             
              slidesToScroll: 1,
             
          }
      },
      {
          breakpoint: 768,
          settings: {
             
              slidesToScroll: 1,
             
          }
      },
      {
          breakpoint: 442,
          settings: {
             
              slidesToScroll: 1,
              slidesToShow: 2,

          }
      }, {
          breakpoint: 425,
          settings: {
             
              slidesToScroll: 1,
              slidesToShow: 2,
          }
      },
  ]
  };

  const slides = [
    {
      imgSrc:
        "https://www.theorganicworld.com/storage/app/public/sub_category/all_categories.png",
      title: "All Categories",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-654659257783f.png",
      title: "Fruits & Vegetables",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-6546594e3b12f.png",
      title: "Foodgrains, Oils & Masala",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-65465971e2623.png",
      title: "Dairy, Bakery, Eggs",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-6546588a72bfb.png",
      title: "Snacks & Branded Food",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-65465821690e5.png",
      title: "Beverages",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-654657e83bc48.png",
      title: "Cleaning & House Hold",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-6546579650496.png",
      title: "Personal Care",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-654656f7d31fa.png",
      title: "Wellness",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-654656936c3d7.png",
      title: "Beauty",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-654656187015b.png",
      title: "Baby Care",
    },
    {
      imgSrc:
        "https://prod.image.theorganicworld.com/storage/app/public/sub_category/2023-11-04-654656521d006.png",
      title: "Kitchen & Garden",
    },
  ];

  const handleThumbnailClick = (index, e) => {
    let tempVar = new Array(activeKeyslick.length).fill(false);
    tempVar[index] = true;
    setActiveKeyslick(tempVar);

    sliderRef.current.slickGoTo(index);
  };

  return (
    <>
      {/* <header id="header" className="header"> */}
      <div className="header1">
        <div className="container px-0">
          <div className="py-2 d-flex justify-content-between align-items-center">
            <span id="social_icons">
              <span className="social-media ">
                <a
                  className="social_icons btn btn-link py-1 lh-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/"
                >
                  <FaLinkedinIn className="social-media-icon font-15" />
                </a>
              </span>
              <span className="social-media ">
                <a
                  className="social_icons btn btn-link py-1 lh-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/"
                >
                  <FaFacebookF className="social-media-icon font-15" />
                </a>
              </span>
              <span className="social-media ">
                <a
                  className="social_icons btn btn-link py-1 lh-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/theorganicworldindia/"
                >
                  <FaInstagram className="social-media-icon font-15" />
                </a>
              </span>
            </span>
            <div className="d-flex justify-content-between align-items-center flex-md-nowrap flex-wrap">
              <span className="me-2">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-Get-App"
                    variant="link p-0 border-0 text-decoration-none"
                  >
                    <MdGetApp className="h1-menu-icon font-15" /> Get App
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <div className="text-center">
                        <div className="my-1">
                          <a className="">EXPERIENCE OUR APP</a>
                        </div>
                        <div className="my-1">
                          <a
                            href="https://apps.apple.com/in/app/octashop/id"
                            role="button"
                          >
                            <img
                              src="https://www.theorganicworld.com/public/assets/front-end/png/apple_app.png"
                              alt=""
                              style={{ width: "140px", height: "40px" }}
                            />
                          </a>
                        </div>
                        <div className="my-1">
                          <a
                            href="https://play.google.com/store/apps/details?id="
                            role="button"
                          >
                            <img
                              src="https://www.theorganicworld.com/public/assets/front-end/png/google_app.png"
                              alt=""
                              style={{ width: "140px", height: "40px" }}
                            />
                          </a>
                        </div>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </span>

              <span className="me-2">
                <a
                  href="https://octashop.com"
                  className="btn btn-link p-0 border-0 text-decoration-none"
                >
                  <span className="me-1">
                    <FaMapMarkerAlt className="h1-menu-icon" /> Own a Franchise
                  </span>
                </a>
              </span>
              <span className="me-2">
                <a
                  href="https://www.octashop.com/"
                  className="btn btn-link p-0 border-0 text-decoration-none"
                >
                  <span className="me-1">
                    <FaMapMarkerAlt className="h1-menu-icon" /> Visit Stores
                  </span>
                </a>
              </span>
              <span className="me-2">
                <a
                  href="https://www.octashop.com"
                  className="btn btn-link p-0 border-0 text-decoration-none"
                >
                  <span className="me-1">
                    <FaQuestionCircle className="h1-menu-icon" /> Help
                  </span>
                </a>
              </span>
              <span className="me-2">
                <span className="me-1">|</span>
              </span>
              <span className="me-2">
                <a
                  className="btn btn-link p-0 border-0 text-decoration-none"
                  href="tel:9999999999"
                >
                  <span className="me-1">
                    <FaPhoneAlt className="h1-menu-icon" />
                  </span>
                  9999999999
                </a>
              </span>
              <span className="me-2">
                <a
                  className="btn btn-link p-0 border-0 text-decoration-none"
                  href="mailto:hello@me.com"
                >
                  <span>
                    <FaEnvelope className="h1-menu-icon" /> hello@me.com
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header2">
        <div className="container px-0">
          <div className="py-2 d-flex justify-content-center align-items-center position-relative flex-md-nowrap flex-wrap">
            <div className="d-flex justify-content-center align-items-center">
              <div className="m-2">
                <IoMenu style={{ fontSize: "20px" }} />
              </div>
              <div className="m-2">
                <img
                  src={octashopLogo}
                  style={{ width: "auto", height: "70px" }}
                />
              </div>
            </div>
            <div className="m-2">
              <div className="search-bar-con position-relative">
                <input
                  type="text"
                  className="form-control search pe-5 py-2 font-15"
                  placeholder="Search for products, brands and more"
                />
                <FaSearch className="search-icon position-absolute end-0 me-2 text-pprimary" />
              </div>
              <div className="d-flex flex-md-nowrap flex-wrap main_categories">
                {/* {mcatNames?.map((mcatN)=>(mcatN))} */}

                {header.mcat?.map((mcat, index) => (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle variant="link" id="dropdown-Eat-Better">
                        {mcat.mcatName}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="border-0 p-0">
                        {/* tabs start */}
                        <div>
                          <div className="nav nav-tabs border-0 subcat-con justify-content-center">
                            {mcat.subcat?.map((subcat, index) => (
                              <>
                                <div
                                  className={`subcat nav-item ${
                                    activeKey[index] ? "active" : ""
                                  }`}
                                  onMouseEnter={() => handleChange(index)}
                                  onClick={() => handleChange(index)}
                                >
                                  <a
                                    data-toggle="tab"
                                    href={`#${subcat.subcatName.replaceAll(
                                      /[^a-zA-Z0-9]/g,
                                      ""
                                    )}`}
                                    aria-expanded="false"
                                    className="d-flex flex-column p-3"
                                  >
                                    <img
                                      className="img-fluid mx-auto mb-2 subcat-img"
                                      src={subcat.subcatImg}
                                      alt={subcat.subcatName}
                                    />
                                    {subcat.subcatName}
                                  </a>
                                </div>
                              </>
                            ))}
                          </div>
                          <div className="tab-content">
                            {mcat.subcat?.map((subcat, index) => (
                              <>
                                <div
                                  id={`${subcat.subcatName.replaceAll(
                                    /[^a-zA-Z0-9]/g,
                                    ""
                                  )}`}
                                  className={`tab-pane fade ${
                                    activeKey[index] ? "active in" : ""
                                  }`}
                                >
                                  <>
                                    <div className="row row-cols-lg-5 h-100 mx-0">
                                      {subcat.subsubcat?.map(
                                        (subsubcat, index) => (
                                          <div
                                            className={`col p-4 ${
                                              index / 2 === 0
                                                ? "bg-light-gray"
                                                : ""
                                            }`}
                                          >
                                            <a
                                              href={subsubcat.subsubcatLink}
                                              className="text-decoration-none text-dark"
                                            >
                                              <b className="py-2">
                                                {subsubcat.subsubcatName}
                                              </b>
                                            </a>
                                            {subsubcat.subsubsubcat?.map(
                                              (subsubsubcat, index) => (
                                                <>
                                                  <div className="py-2">
                                                    <a
                                                      href={
                                                        subsubsubcat.subsubsubcatLink
                                                      }
                                                      className="text-decoration-none text-dark"
                                                    >
                                                      {
                                                        subsubsubcat.subsubsubcatName
                                                      }
                                                    </a>
                                                  </div>
                                                </>
                                              )
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                        {/* tabs end */}
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ))}
              </div>
            </div>
            <div className="m-2 position-relative">
              <div className="d-flex justify-content-between align-items-center font-13">
                <div className="d-flex justify-content-center align-items-center mx-2">
                  {/* <img src="" alt="" /> */}
                  <span className="font-13">
                    {/* <div className="form-select py-0 border-0"></div> */}
                    <Dropdown>
                      <Dropdown.Toggle
                        drop={"down-centered"}
                        variant="link p-2 rounded-3 border-0 text-dark font-13 font-600 dropdown-after-content-none"
                        id="dropdown-Deliverto"
                      >
                        <div className="d-flex">
                          <FaLocationDot className="text-pprimary h2-icon me-1" />

                          <div className="d-flex flex-column">
                            <div className="font-600 text-secondary lh-1">
                              Deliver to
                            </div>
                            {serviceablePincode}
                          </div>
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="font-14 p-3 border cus-box-shadow">
                        <div className="text-center">
                          <div className="px-3">
                            <div className="mb-2">
                              <span>
                                You are viewing our product Catalogue in
                              </span>
                            </div>
                            <div className="my-2">
                              <span className="text-primary">
                                {searchPlace}, {serviceablePincode}
                              </span>
                            </div>
                          </div>
                          <div className="my-2">
                            <button className="btn btn-primary curved-border">
                              Continue
                            </button>
                          </div>
                          <div className="my-2 text-start">
                            <span>Select a location for delivery</span>
                          </div>
                          <div className="my-2 text-start">
                            <button
                              id="search_new"
                              onClick={() => setisSearchPlace(!isSearchPlace)}
                              className="btn btn-link"
                            >
                              <span className="me-1">
                                {isSearchPlace ? (
                                  <CiCircleMinus className="font-18" />
                                ) : (
                                  <CiCirclePlus className="font-18" />
                                )}
                              </span>
                              <span className="text-decoration-underline">
                                Search new area
                              </span>
                            </button>
                          </div>
                          {isSearchPlace && (
                            <div className="mt-2 isSearchPlaceCon">
                              <input
                                name="area"
                                id="area_sel"
                                type="text"
                                className="form-control py-2 font-15"
                                value={searchPlace}
                                onChange={(e) => setSearchPlace(e.target.value)}
                                placeholder="Search your Area / Apartment / Pincode"
                                required=""
                                autocomplete="off"
                              />
                              {/* <GoogleAutocomplete
                                value={searchPlace}
                                onChange={(e) => setSearchPlace(e.target.value)}
                                label="Search your Area / Apartment / Pincode"
                              /> */}

                              <button className="btn btn-primary curved-border mt-2">
                                Submit
                              </button>
                            </div>
                          )}
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                </div>

                <div className="d-flex justify-content-center align-items-center mx-2">
                  {/* <img src="" alt="" /> */}
                  <span className="font-13">
                    <Dropdown>
                      <Dropdown.Toggle
                        drop={"down-centered"}
                        variant="link p-2 rounded-3 border-0 text-dark font-13 font-600 dropdown-after-content-none"
                        id="dropdown-Deliverto"
                      >
                        <div className="d-flex">
                          <CgProfile className="text-pprimary h2-icon me-1" />

                          <div className="d-flex flex-column">
                            <div className="font-600 text-secondary lh-1">
                              Hello, User
                            </div>
                            Account & Lists
                          </div>
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="font-14 p-3 border cus-box-shadow">
                        <div className="d-flex justify-content-between alignment-center">
                          <button className="btn btn-primary curved-border btn-sm">
                            Sign in
                          </button>
                          <span className=" font-12 font-600">
                            New Customer
                            <a className="" data-action="sign_up_Desing_Model">
                              Sign up
                            </a>
                          </span>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                </div>

                <div className="d-flex justify-content-center align-items-center mx-2">
                  <TbLogin className="text-pprimary h2-icon me-1" />
                  <span>Login</span>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2">
                  <TbLogout className="text-pprimary h2-icon me-1" />
                  <span className="text-nowrap">Sign up</span>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2">
                  <div className="position-relative cart-con">
                    <FaCartShopping className="text-pprimary h2-icon me-1" />
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">
                      {cartCount}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center justify-content-end">
                  <a
                    href="https://www.theorganicworld.com/index_products?data_from=offers&amp;page=1"
                    className="ml-2 mr-2"
                  >
                    <img
                      loading="lazy"
                      style={{ height: "40px", width: "90px" }}
                      src="https://prod.image.theorganicworld.com/storage/app/public/banner/Group 4863874.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header3">
        <div className="mx-auto px-0">
          <div className="horizontal-categories d-flex justify-content-center align-items-center">
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <div className="d-flex justify-content-center align-items-center horizontal-cat-con m-1 p-1">
                    <img src={slide.imgSrc} alt={slide.title} className="horizontal-cat-img"/>
                    <span class="mx-1">{slide.title}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* </header> */}
    </>
  );
}

export default Header;
