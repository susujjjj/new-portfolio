import React from 'react'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        {/* <div className="footer_social">
          <a
            href="https://www.facebook.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"> </i>
          </a>

          <a
            href="https://www.instagram.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"> </i>
          </a>

          <a
            href="https://twitter.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"> </i>
          </a>
        </div> */}

        <span className="footer_copy">&#169; Subeen Jeong</span>
      </div>
    </footer>
  )
}
export default Footer
