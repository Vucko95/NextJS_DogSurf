import styles from '../styles/LoginReg.module.css'
import cv2 from '../public/images/cv2.png'
const Profile = () => { 
    return (
        
<div  className={styles.logincontent}>
    <div className={styles.wrapper}>
   
           <h1>Edit Profile</h1>
           <form  action="#">
           <input className={styles.form_inputs} type="text" placeholder='Username' />
           <input className={styles.form_inputs} type="text" placeholder='Firstname' />
           <input className={styles.form_inputs} type="text" placeholder='LastName' />
           <input className={styles.form_inputs} type="text" placeholder='Email' />
           <input className={styles.form_inputs} type="text" placeholder='City' />
           <input className={styles.form_inputs} type="text" placeholder='Address' />
           </form>
        <button className={styles.form_button} >Profile</button>
    
    </div>
    <div className={styles.wrapper}>
   
           <h1>Edit Property</h1>
           <form  action="#">
           <input className={styles.form_inputs} type="text" placeholder='Property Location' />
           <input className={styles.form_inputs} type="text" placeholder='Property Address' />
           </form>
        <button className={styles.form_button} >Profile</button>
    
    </div>

</div>
    )}

export default Profile