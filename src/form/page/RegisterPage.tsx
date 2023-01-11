

const RegisterPage = () => {
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