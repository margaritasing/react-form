import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'


const FormikComponents = () => {     
   
  
  return (
    <div>
        <h1>Formik Yup Tutorial</h1>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email:'',
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema={Yup.object({
                firstName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                lastName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                email: Yup.string()
                                    .email('No es un email valido')
                                    .required('Requerido')        
          })}
        >

          {
            (formik) => (
              <Form>             
              <Field name="firstName" type="text" placeholder="FirstName"  />
              <ErrorMessage name="firstName" component="span" />   

              <Field name="lastName" type="text" placeholder="LastName"/>        
              <ErrorMessage name="lastName" component="span" />    

              <Field name="email" type="email" placeholder="Email"/>          
              <ErrorMessage name="email" component="span" />   
  
               <button type='submit'>Submit</button>  
          </Form>

            )
          }          
        </Formik>
       
    </div>
  )
}

export default FormikComponents