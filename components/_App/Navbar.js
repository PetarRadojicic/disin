import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${
                        currentPath == "/" && "active"
                      }`}
                    >
                      Početna
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/ONama/"
                      className={`nav-link ${
                        currentPath == "/about/" && "active"
                      }`}
                    >
                      O Nama
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Usluge
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/estetska-stomatologija/"
                          className={`nav-link ${
                            currentPath == "/estetska-stomatologija/" && "active"
                          }`}
                        >
                          Estetska stomatologija
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/protetika/"
                          className={`nav-link ${
                            currentPath == "/protetika/" && "active"
                          }`}
                        >
                          Protetika
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/rekonstruktivna-stomatologija-i-endodoncija/"
                          className={`nav-link ${
                            currentPath == "/rekonstruktivna-stomatologija-i-endodoncija/" && "active"
                          }`}
                        >
                          Rekonstruktivna stomatologija i endodoncija
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/decja-i-preventivna-stomatologija/"
                          className={`nav-link ${
                            currentPath == "/decja-i-preventivna-stomatologija/" && "active"
                          }`}
                        >
                          Dečja i preventivna stomatologija
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/oralna-hirurgija-i-implantologija/"
                          className={`nav-link ${
                            currentPath == "/oralna-hirurgija-i-implantologija/" && "active"
                          }`}
                        >
                          Oralna hirurgija i implantologija
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/parodontologija/"
                          className={`nav-link ${
                            currentPath == "/parodontologija/" && "active"
                          }`}
                        >
                          Parodontologija
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/dentalni-turizam/"
                          className={`nav-link ${
                            currentPath == "/dentalni-turizam/" && "active"
                          }`}
                        >
                          Dentalni turizam
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/doctors/"
                      className={`nav-link ${
                        currentPath == "/doctors/" && "active"
                      }`}
                    >
                      Doktori
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/galerija/"
                      className={`nav-link ${
                        currentPath == "/galerija/" && "active"
                      }`}
                    >
                      Galerija
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
