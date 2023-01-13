import { Formik, FormikErrors, useFormik  } from 'formik'
import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string
}

const FormikPage = () => {

  const validate = ( { firstName, lastName, email  }: FormValues ) => {
    const errors: FormikErrors<FormValues> = { }

    if (!firstName) {
        errors.firstName = 'Required'
    }else if ( firstName.length > 15){
        errors.firstName = 'Must be 15 characters or less'
    }

    if (!lastName) {
        errors.firstName = 'Required'
    }else if ( lastName.length > 20){
        errors.lastName = 'Must be 15 characters or less'
    }

    if (!values.email) {
        errors.firstName = 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address'
    }

        return errors
  }

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues:{
        firstName: '',
        lastName: '',
        email:'',
    },
    onSubmit: (values) =>{
        console.log(values)
    }
  })
  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstname">First Name</label>
            <input 
                type="text"
                name="firstName"
                onChange={ handleChange }
                value={ values.firstName }
             />
             <span>First Name Is Require</span>

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                name="lastName"
                onChange={ handleChange }
                value={ values.lastName }
             />
              <span>Last Name Is Require</span>

            <label htmlFor="email">Email Address</label>
            <input 
                type="email"
                name="email"
                onChange={ handleChange }
                value={ values.email }
             />
              <span>Email Is Require</span>
              <span>Check for an valid email format</span>

             <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default FormikPage