import styles from "../styles/navbar.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Clothing</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerColumn}>
        <div className={styles.footerSocial}>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
        </div>
      </div>
    </footer>
  );
}
