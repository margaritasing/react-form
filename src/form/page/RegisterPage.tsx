import { useState } from "react"


const RegisterPage = () => {

  const [registerData, setRegisterData] = useState({
    name:'Libia',
    email:'libiamfreitesm@gmail.com',
    password1:'1234566',
    password2:'1234566'
  })

  const { name, email,password1, password2  } = registerData;

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    
  }



  return (
    <div>
        <h1>Register Page</h1>
        <form>
            <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={ onChange}
             />

        <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={ onChange}
             />

        <input 
            type="password"
            placeholder="Password"
            value={password1}
            onChange={ onChange}
             />

        <input 
            type="password"
            placeholder="Repet Password"
            value={password2}
            onChange={ onChange}
             />

             <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default RegisterPage