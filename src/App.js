import React,{useState} from "react";


export default function App() {

  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const [submited, setSubmited] = useState(false);

  const [valid,setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValue({ ...value, firstName: e.target.value })
  }

  const handleLastNameInputChange = (e) => {
    setValue({...value, lastName : e.target.value})
  }

  const handleEmailInputChange = (e) => {
    setValue({...value, email : e.target.value})
  }

  const handleSubmited = (event) => {
    event.preventDefault();
    if (value.firstName && value.lastName && value.email) {
      setValid(true);
    }
    setSubmited(true);
  }

  return (
    <div className='form-container'>
      <form className='register-form' >
        {submited && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
        <input  className='form-field' placeholder='First Name' onChange={handleFirstNameInputChange}></input>
        {submited && !value.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input className='form-field' placeholder='Last Name'  onChange={handleLastNameInputChange}></input>
        {submited && !value.lastName ? <span id="first-name-error">Please enter a last name</span> : null}
        <input  className='form-field' placeholder='Email' onChange={handleEmailInputChange}></input>
        {submited && !value.email ? <span id="first-name-error">Please enter a email</span> : null}
        <button className='form-field' onClick={handleSubmited}>Submit</button>
      </form>
    </div>
  );
}