import styles from '../components/layout.module.css';

export default function Signup() {
  return (
    <div>
      <div className={styles.profileThirdHeadings}>
        Contact Me
      </div>

      <div className={styles.profileText}>
        If you want to get in touch, please subscribe to my mailing list:
      </div>

      <form action="https://us21.list-manage.com/contact-form?u=be0fe0c0b2c3c7bc24c62f2a8&form_id=998c88f962d6950d32007f397c7a883f" method="post" target="_blank">
        <input type="email" name="EMAIL" placeholder="Your email address" required />
        <div style={{ position: "absolute", left: "-5000px" }}>
          <input type="text" name="b_xxxxxxxxxxxxx_5d75f76dc8" tabIndex="-1" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}