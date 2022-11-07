import React, { useState } from 'react'
import Wetodo from '../../assets/wetodo.gif'
import Channel from '../../assets/channel.png'
import Airbnb from '../../assets/airbnb.gif'
import './projects.css'

const Projects = (props) => {
  const [open, setOpen] = useState(0)

  const openModalHandler = (index) => {
    setOpen(index)
  }

  return (
    <section className="projects section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle"></span>

      <div className="projects_container container grid">
        <div className="projects_content">
          <div className="projects_photo_box">
            <img src={Wetodo} className="img" alt="img" />
            {/* <i className="uil uil-web-grid projects_icon"></i>
            <h3 className="projects_title">
              Product <br /> Designer
            </h3> */}
          </div>

          <a
            className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
            href="https://github.com/susujjjj/todoapp-server"
          >
            <span
              className="projects_button"
              // onClick={() => openModalHandler(1)}
            >
              View Github
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>

          <div
            className={
              open === 1 ? 'projects_modal active-modal' : 'projects_modal'
            }
          >
            <div className="projects_modal-content">
              <i
                onClick={() => openModalHandler(0)}
                className="uil uil-times projects_modal-close"
              ></i>

              <h3 className="projects_modal-title">Product Designer</h3>
              <p className="projects_modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="projects_modal-projects grid">
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">Web page development.</p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects_content">
          <div className="projects_photo_box">
            <img src={Channel} className="img" alt="img" />
          </div>

          <a
            className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
            href="https://github.com/wecode-bootcamp-korea/9-No.4-frontend"
          >
            <span
              className="projects_button"
              // onClick={() => openModalHandler(1)}
            >
              View Github
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>

          <a
            className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
            href="https://www.youtube.com/watch?v=A-BaNR3fjeI&t=3s"
          >
            <span
              className="projects_button"
              // onClick={() => openModalHandler(1)}
            >
              View Video
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>

          {/* <span onClick={() => openModalHandler(2)} className="projects_button">
            View More
            <i className="uil uil-arrow-right projects_button-icon"></i>
          </span> */}

          <div
            className={
              open === 2 ? 'projects_modal active-modal' : 'projects_modal'
            }
          >
            <div className="projects_modal-content">
              <i
                onClick={() => openModalHandler(0)}
                className="uil uil-times projects_modal-close"
              ></i>

              <h3 className="projects_modal-title">UX/UI Designer</h3>
              <p className="projects_modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="projects_modal-project grid">
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">Web page development.</p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects_content">
          <div className="projects_photo_box">
            <img src={Airbnb} className="img" alt="img" />
          </div>

          <a
            className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
            href="https://velog.io/@rhftnqls/2%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%97%90%EC%96%B4%EB%B9%84%EC%95%A4%EB%B9%84"
          >
            <span
              className="projects_button"
              // onClick={() => openModalHandler(1)}
            >
              View Review
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>

          <a
            className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
            href="https://www.youtube.com/watch?v=28Q003gHF4Q"
          >
            <span
              className="projects_button"
              // onClick={() => openModalHandler(1)}
            >
              View Video
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>
          {/* <span onClick={() => openModalHandler(3)} className="projects_button">
            View More
            <i className="uil uil-arrow-right projects_button-icon"></i>
          </span> */}

          <div
            className={
              open === 3 ? 'projects_modal active-modal' : 'projects_modal'
            }
          >
            <div className="projects_modal-content">
              <i
                onClick={() => openModalHandler(0)}
                className="uil uil-times projects_modal-close"
              ></i>

              <h3 className="projects_modal-title">Visual Designer</h3>
              <p className="projects_modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="projects_modal-project grid">
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">Web page development.</p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
