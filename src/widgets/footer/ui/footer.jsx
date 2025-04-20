import logo from '/assets/logo.svg'
import instagram from '/assets/instagram.svg'
import twitter from '/assets/twitter.svg'
import youtube from '/assets/youtube.svg'
import * as styles from './footer.module.css'
import React from 'react';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerMainContent}>
        <div className={styles.sloganContainer}>
          <img src={logo} alt="logo"/>
          <p>Takeaway & Delivery template <span>for small - medium businesses.</span></p>
        </div>
        <div className={styles.footerLinksContainer}>
          <div className={styles.footerLinks}>
            <h2>company</h2>
            <span>Home</span>
            <span>Order</span>
            <span>FAQ</span>
            <span>Contact</span>
          </div>
          <div className={styles.footerLinks}>
            <h2>template</h2>
            <a href="https://www.google.com/">
              <span>Style Guide</span>
            </a>
            <a href="https://www.google.com/">
              <span>Changelog</span>
            </a>
            <a href="https://www.google.com/">
              <span>Licence</span>
            </a>
            <a href="https://www.google.com/">
              <span>Webflow University</span>
            </a>
          </div>
          <div className={styles.footerLinks}>
            <h2>flowbase</h2>
            <span>More Cloneables</span>
          </div>
        </div>
      </div>
      <hr/>
      <div className={styles.footerAdditionalContent}>
        <p>Built by <span>Flowbase</span>· Powered by <span>Webflow</span></p>
        <div className={styles.socialMedia}>
          <img src={instagram} alt="instagram"/>
          <img src={twitter} alt="twitter"/>
          <img src={youtube} alt="youtube"/>
        </div>
      </div>
    </footer>
  )
}
