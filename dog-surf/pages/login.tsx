import styles from '../styles/LoginReg.module.css'
import { useState } from 'react'
const login = () => { 

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = 'http://localhost:8090/api/auth/login'
        const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSONdata,
        }


    const response = await fetch(endpoint, options)
    const result = await response.json()
    console.log(result)
    sessionStorage.set('item', 'itemValue')
}

    const [count, setCount] = useState(0)
    console.log(count)


  
return (
<div  className={styles.logincontent}>
    <div className={styles.wrapper}>
   
           <h1>Login Form</h1>
           <button onClick={() => setCount(count+1)}></button>
           <form onSubmit={handleSubmit}>

           <input className={styles.form_inputs} id='username'  type="text" placeholder='Username' />
           <input className={styles.form_inputs} id='password'  type="text" placeholder='Password' />
          <button type="submit" className={styles.form_button} >Login</button>
           </form>
    
    </div>


</div>
    )}

export default login