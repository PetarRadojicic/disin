import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>Kontakt</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:dentumbgd@gmail.com">dentumbgd@gmail.com</a>
                      <a href="mailto:drmandicuros@gmail.com">drmandicuros@gmail.com</a>
                      <a href="mailto:vladanamandic@gmail.com">vladanamandic@gmail.com</a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+381694444321">+381 69 4444 321</a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      Neznanog junaka br. 5, Dedinje, Beograd
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                <h3>Brzi linkovi</h3>
                  <ul>
                    <li>
                      <Link href="/ONama">O Nama</Link>
                    </li>
                    <li>
                      <Link href="/about">Galerija</Link>
                    </li>
                    <li>
                      <Link href="/doctor">Doktori</Link>
                    </li>
                    <li>
                      <Link href="/contact">Kontakt</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Naše Usluge</h3>
                  <ul>
                    <li>
                      <Link href="/estetska-stomatologija">Estetska stomatologija</Link>
                    </li>
                    <li>
                      <Link href="/protetika">Protetika</Link>
                    </li>
                    <li>
                      <Link href="/rekonstruktivna-stomatologija-i-endodoncija">Rekonstruktivna stomatologija i endodoncija</Link>
                    </li>
                    <li>
                      <Link href="/decja-i-preventivna-stomatologija">Decja i preventivna stomatologija</Link>
                    </li>
                    <li>
                      <Link href="/oralna-hirurgija-i-implantologija">Oralna hirurgija i implantologija</Link>
                    </li>
                    <li>
                      <Link href="/parodontologija">Parodontologija</Link>
                    </li>
                    <li>
                      <Link href="/dentalni-turizam">Dentalni turizam</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-feedback">
                  <h3>Vaš utisak</h3>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ime i prezime"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefon"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="your_message"
                        rows="3"
                        placeholder="Poruka"
                      ></textarea>
                    </div>
                    <div className="text-left">
                      <button type="submit" className="btn feedback-btn">
                        Pošalji
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Design & Developed by{" "}
              <a href="#" target="_blank">
                Dentum
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
