import {useState} from 'react'
import FormSuccess from './FormSuccess'
import RegisteredUser from './RegisteredUser'




const RegisteredForm =() => {
  const [isSubmitted, setIsSubmitted,] = useState(false)

  function submitForm() {
    setIsSubmitted(true);

  }
  return(
    <>
    <div className='form-container'>
    {!isSubmitted ? (
          <RegisteredUser submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}


    </div>
    </>

  )

}
export default RegisteredForm
