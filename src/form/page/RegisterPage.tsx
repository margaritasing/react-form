import { useForm } from "../hooks/useForm"


const RegisterPage = () => {

  const { formData, onChange, name, email,password1, password2} = useForm({
      name:'',
      email:'',
      password1:'',
      password2:''
  });

 

  
 

  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(formData)
  }



  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={ onSubmit } >
            <input 
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={ onChange}
             />

        <input 
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={ onChange}
             />

        <input 
            name="password1"
            type="password"
            placeholder="Password"
            value={password1}
            onChange={ onChange}
             />

        <input 
            name="password2"
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