import { useField } from "formik"

interface Props {
    label: string;
    name:string;
    type?:'text'| 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}


const MyTextInput = (props: Props ) => {

   const [  ] =  useField()


  return (
    <>
     <label htmlFor=""></label>
       
    
    
    </>
  )
}

export default MyTextInput