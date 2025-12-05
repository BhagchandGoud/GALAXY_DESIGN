import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { TbAppsFilled } from "react-icons/tb";
import "./App.css";

const App = () => {
  return (
    <div className="app-root">
      <section>
        <div className="input-part">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="46"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input type="search" />
        </div>

        <div className="box">
          <div className="sub-box">
            <div className="sub-box-p-text">
              <p>CHALLENGE UI * WEB DESIGN</p>
            </div>

            <div className="sub-box-h1-text">
              <h1>TANTANG</h1>
            </div>

            <div className="script">
              <p>GALAXY</p>
            </div>

            <div className="sub-box-footer-text">
              <p>ASKER AKMIL DESIGN</p>
            </div>

            <div className="btns">
              <button>LOGIN</button>
              <button>BUAT AKUN</button>
            </div>
          </div>

          <div className="sub-box-2" />

          <div className="mid-sub-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="44"
              fill="currentColor"
              className="bi bi-vector-pen"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
              />
              <path
                fillRule="evenodd"
                d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"
              />
            </svg>
          </div>

          <div className="sub-box-3" />

          <div className="sub-box-4">
            <div className="sub-box-4-1" />
            <div className="sub-box-4-2">
              <img src="/images/image.png" alt="thumb" />
              <div className="sub-box-4-2-1" />
            </div>

            <div className="text">
              <h1>GALAKSI ADALAH ...</h1>
              <div className="para-text">
                <p>
                  Kumpulan besar bintang, gas, dan debu yang terikat oleh
                  gravitasi. Mereka bisa berbentuk spiral, elips, atau tak
                  beraturan. Contoh terkenal adalah Galaksi Bima Sakti
                </p>
              </div>
            </div>

            <div className="icon-boxes">
              <AiFillHome className="home" />
              <TbAppsFilled className="group" />
              <IoSettings className="setting" />
              <FaUserAlt className="user" />
            </div>
          </div>
        </div>
      </section>

      <section className="second-big-box">
        <div className="upper-box-group">
          <div className="box-one" />
          <div className="box-two">
            <div className="box-two-one">
              <p>PENJALASANSINKATTANTAKGGALAKSI</p>
            </div>
          </div>
        </div>

        <div className="box-three">
          <img
            src="/images/img_2.png"
            alt="planet"
            srcSet=""
            className="planate"
          />
          <div className="box-three-one">
            <img
              src="/images/img_3.png"
              alt="rocket"
              className="rocket-1"
            />
            <div className="box-three-one-one">
              <p>
                Galaksi biasanya dikelompokkan dalam gugus galaksi atau
                supergugus galaksi, yang merupakan struktur terbesar yang
                dikenal di alam semesta. Galaksi-galaksi ini dapat saling
                berinteraksi melalui gaya gravitasi, yang dapat menyebabkan
                pergeseran atau penggabungan galaksi.
              </p>

              <div className="box-three-one-one-one">
                <div className="box-three-one-one-one-one">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="66"
                    fill="currentColor"
                    className="bi bi-arrow-left-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                    />
                  </svg>
                  <p>Sampe simi aja</p>
                </div>
              </div>
            </div>

            <div className="box-three-one-two-one">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="66"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <p>Sampe simi aja</p>
            </div>

            <div className="box-three-one-two">
              <div className="box-three-one-two-two">
                <p>
                  Galaksi biasanya dikelompokkan dalam gugus galaksi atau
                  supergugus galaksi, yang merupakan struktur terbesar yang
                  dikenal di alam semesta. Galaksi-galaksi ini dapat saling
                  berinteraksi melalui gaya gravitasi, yang dapat menyebabkan
                  pergeseran atau penggabungan galaksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third-big-box">
        <div className="third-box-one">
          <p>GULIR</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="56"
            fill="currentColor"
            className="bi bi-arrow-down-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
            />
          </svg>
        </div>
      </section>

      <section className="fourth-big-box">
        <img src="/images/img_4.png" alt="decor" />
      </section>

      <section className="fifth-big-box">
        <div className="fifth-box-first">
          <div className="fifth-box-first-first">
            <div className="fifth-box-first-first-first" />
          </div>
          <div className="fifth-box-second" />
        </div>

        <div className="fifth-box-middle">
          <img src="/images/img_5.jpeg" alt="img5" className="img_1" />
          <div className="img-part-1">
            <img src="/images/img_6.jpeg" alt="img6" className="img_2" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="46"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </div>

          <img src="/images/img_7.png" alt="img7" className="img_3" />
        </div>

        <div className="fifth-box-footer">
          <div className="fifth-box-footer-one">
            <p>CREATED BY BHAGCHAND GOUD</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
