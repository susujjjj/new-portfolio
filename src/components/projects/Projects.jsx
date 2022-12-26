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
          </div>

          <a href="https://github.com/susujjjj/share-todo-server">
            <span className="projects_button">
              View Github
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>

          <div>
            <span
              className="projects_button"
              onClick={() => openModalHandler(1)}
            >
              What I implemented
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </div>

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

              <h3 className="projects_modal-title">We Todo</h3>
              <div className="projects_modal-subtitle">
                <p>
                  Ultimately, what I wanted to get from this side project is to
                  learn how Node.js and MySQL databases, Socket.io, are used.
                </p>
                <p>
                  I developed my side project real-time share todo application
                  Using Node.js, React and Socket.io I used MySQL database
                  because I learned MongoDB before, so this time I studied and
                  used MySQL and Node.js ORM called Sequelize to access the
                  database and read the data more easily. And also, I tested API
                  with Postman.
                </p>
              </div>

              <ul className="projects_modal-projects grid">
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    User authentication using JWT and password hashed with
                    bcrypt
                  </p>
                </li>
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Register Schema: id, username, password, name, email, and
                    the URL address for the profile photo
                  </p>
                </li>
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Login Schema: username, password
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Implemented CRUD for todo task and line-through text
                    decoration for the completed task
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Implemented enables real-time viewing when something happens
                    when other users connect simultaneously using Socket.io
                  </p>
                </li>
              </ul>

              <a
                className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN"
                href="https://chloej.notion.site/We-todo-share-todo-app-20f04590a20241898d6078de8fc602d5"
              >
                <span className="projects_button projects_detail">
                  Please check my Notion if you want to see more detail
                  <i className="uil uil-arrow-right projects_button-icon"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="projects_content">
          <div className="projects_photo_box">
            <img src={Channel} className="img" alt="img" />
          </div>

          <a
            className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN"
            href="https://github.com/susujjjj/9-No.4-frontend"
          >
            <span className="projects_button">
              View Github
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>

          <a
            className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN "
            href="https://www.youtube.com/watch?v=A-BaNR3fjeI&t=3s"
          >
            <span className="projects_button">
              View Video
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>

          <span onClick={() => openModalHandler(2)} className="projects_button">
            What I implemented
            <i className="uil uil-arrow-right projects_button-icon"></i>
          </span>

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

              <h3 className="projects_modal-title">
                Channel Shopping Website Clone 06.22 2020 - 07.03 2020
              </h3>
              <div className="projects_modal-subtitle">
                <p>
                  Channel Shopping Website clone is a team project that I worked
                  on while I was learning programming at boot camp for the first
                  time in my life. here are What I implemented below.
                </p>
              </div>

              <ul className="projects_modal-projects grid">
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Skills: JavaScript(ES6) React.js(Class Components), Scss,
                    Fontawesome, React-slick
                  </p>
                </li>
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    implemented Sign up & Sign in toggled UI and fetched API
                    with post method
                  </p>
                </li>
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    made font size smaller during scrolling in news letter page
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Designed carousel slider with react-slick&slick-carousel
                    library in news letter page
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
            <span className="projects_button">
              View Review
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>

          <a
            className="ViewDemoSiteButton-ViewDemoSiteButton-a5vzN css-1uc6x06"
            href="https://www.youtube.com/watch?v=28Q003gHF4Q"
          >
            <span className="projects_button">
              View Video
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>
          </a>

          <span onClick={() => openModalHandler(3)} className="projects_button">
            What I implemented
            <i className="uil uil-arrow-right projects_button-icon"></i>
          </span>

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

              <h3 className="projects_modal-title">
                Airbnb Clone 07.06 2020 - 07.17 2020
              </h3>
              <div className="projects_modal-subtitle">
                <p>
                  Airbnb clone is a team project that I worked on while I was
                  learning programming at boot camp. here are What I implemented
                  below.
                </p>
              </div>

              <ul className="projects_modal-projects grid">
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Skills: React(Functional components), Javascript,
                    styled-components, scss, react-icons, react-dates library
                  </p>
                </li>
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Mainly developed Header, Main and Footer components
                  </p>
                </li>
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Implemented header design change when scroll down
                  </p>
                </li>
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Implemented date range picker calender using react-dates
                    library and designed in a airbnb customized style with
                    styled-components
                  </p>
                </li>
                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Navigated to a URL with query string values that received
                    from location, date and the number
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Navigated to a URL with query string values that received
                    from location, date and the number when click search button
                  </p>
                </li>

                <li className="projects_modal-project">
                  <i className="uil uil-check-circle projects_modal-icon"></i>
                  <p className="projects_modal-info">
                    Helped team member's part about implementing Kakao social
                    login and map api
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
