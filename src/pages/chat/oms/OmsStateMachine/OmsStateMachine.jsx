import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const OmsStateMachine = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  function capitalizeAndSeparate(str) {
    const words = str.match(/[A-Z]?[a-z]*/g);
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }
  const inputString = pathnames[pathnames.length - 1];
  const result = capitalizeAndSeparate(inputString);
  let pageTitle = result;

  return (
    <>
      {console.log(Object.values(location))}

      {console.log(Object.keys(location))}
      <div>
        <div className="row pt-3 bg-cGreen text-white">
          <div className="col-lg-5 col-md-6 col-sm-6 col-12 ps-5">
            <p className="" style={{ fontSize: "24px", fontWeight: 700 }}>
              {pageTitle}
            </p>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6 col-12   d-flex align-items-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li style={{ cursor: "pointer", fontWeight: 700 }}>
                  <a className="text-decoration-none text-white">Home &nbsp;</a>
                  <a style={{ color: "#212529bf" }}>/ &nbsp;</a>
                </li>
                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <li
                      key={name}
                      className={`breadcrumb-item ${isLast ? "active" : ""}`}
                      aria-current={isLast ? "page" : undefined}
                      style={{ fontWeight: 700 }}
                    >
                      {isLast ? (
                        name
                      ) : (
                        <Link
                          style={{
                            color: isLast ? "" : "#fff",
                            textDecoration: isLast ? "" : "none",
                          }}
                          to={routeTo}
                        >
                          {name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default OmsStateMachine;

// export default OmsStateMachine;
