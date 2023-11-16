import React from 'react'
import Contacto from '../components/Contacto.js'
import { RxInstagramLogo } from "react-icons/rx";
import { RxTwitterLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";

export default function Footer() {
  return (
    <footer>

      <div className="container">
        <footer>

          <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex flex-column align-items-center">
              <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>

              <div className="footer-wrapper_branding-social">
                <ul className="ms-3"><RxTwitterLogo className='redes-socifooter-wrapper_branding-social' href='https://twitter.com/' /> </ul>
                <ul className="ms-3"><RxInstagramLogo className='redes-socifooter-wrapper_branding-social' href='https://www.instagram.com/' /> </ul>
                <ul className="ms-3"><RxLinkedinLogo className='redes-socifooter-wrapper_branding-social' href='https://www.linkedin.com/' /> </ul>
              </div>

            </div>
            <div className="col-md-8 d-flex align-items-center">
              < Contacto />
            </div>
          </div>
        </footer>
      </div>
    </footer>
  )
}
