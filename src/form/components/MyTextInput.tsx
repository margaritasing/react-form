import { useField } from "formik"

interface Props {
    label: string;
    name:string;
    type?:'text'| 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}


const MyTextInput = ({ label, ...props }: Props ) => {

   const [ field, meta  ] =  useField(props)


  return (
    <>
        <label htmlFor={ props.id || props.name }></label>
        <input className="text" {... field} {...props} />
       {
        meta.touched && meta.error && (
            <span className="error">{ meta.error }</span>
        )
       }
    
    
    </>
  )
}

export default MyTextInput