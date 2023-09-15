import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [activeItem, setActiveItem] = useState(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBar);
    return () => {
      window.removeEventListener("scroll", handleScrollBar);
    };
  }, []);

  function handleScrollBar() {
    window.scrollY > 100 ? setScroll(true) : setScroll(false);
  }

  function handleItemClick(item) {
    setActiveItem(item);
  }

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scroll ? "py-1" : "py-4"
      }`}
    >
      <div id="navBar" className="container">
        <Link
          className="navbar-brand titlePage"
          to="/"
          onClick={() => {
            handleItemClick("home");
          }}
          style={{
            backgroundColor: activeItem === "home" ? "" : "",
          }}
        >
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link rounded-3 ${
                  activeItem === "about" ? "active" : ""
                }`}
                aria-current="page"
                to="about"
                onClick={() => {
                  handleItemClick("about");
                }}
                style={{
                  backgroundColor:
                    activeItem === "about" ? "var(--main-bg-color)" : "",
                }}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link rounded-3 ${
                  activeItem === "portfolio" ? "active" : ""
                }`}
                aria-current="page"
                to="portfolio"
                onClick={() => {
                  handleItemClick("portfolio");
                }}
                style={{
                  backgroundColor:
                    activeItem === "portfolio" ? "var(--main-bg-color)" : "",
                }}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link rounded-3 ${
                  activeItem === "contact" ? "active" : ""
                }`}
                aria-current="page"
                to="contact"
                onClick={() => {
                  handleItemClick("contact");
                }}
                style={{
                  backgroundColor:
                    activeItem === "contact" ? "var(--main-bg-color)" : "",
                }}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
