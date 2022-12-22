import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <nav>
      <div className={styles.navcontent}>
    
          <div className={styles.logo}>
            <h3>Dog Surf</h3>
          </div>
          <div className={styles.nav_1nd_dog_pic}>
        <img alt="test" src="/images/right.png"  />
        </div>
        <div className={styles.nav_links}>
          <Link href="/home">Home</Link>
          <Link href="/accomodation">Accomodation</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className={styles.nav_2nd_dog_pic}>
        <img alt="test" src="/images/left.png"  />
        </div>
        <div className={styles.navadditionals}>
            <Link href="/login/">Login</Link>
            <Link href="/register/">Register</Link>
            </div>
      
      </div>
    </nav>
);
}
 
export default Navbar;