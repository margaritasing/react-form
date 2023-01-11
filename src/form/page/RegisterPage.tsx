import { useState } from "react"


const RegisterPage = () => {

  const [registerData, setRegisterData] = useState({
    name:'Libia',
    email:'libiamfreitesm@gmail.com',
    password1:'1234566',
    password2:'1234566'
  })

  const { name, email,password1, password2  } = registerData



  return (
    <div>
        <h1>Register Page</h1>
        <form>
            <input 
            type="text"
            placeholder="Name"
             />

        <input 
            type="email"
            placeholder="Email"
             />

        <input 
            type="password"
            placeholder="Password"
             />

        <input 
            type="password"
            placeholder="Repet Password"
             />

             <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default RegisterPage