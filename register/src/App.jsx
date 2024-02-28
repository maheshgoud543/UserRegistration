import { useState } from 'react'
import './App.css'
import FormInput from './Components/FormInputs'
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: ""
  })

  const inputs = [{
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Enter your Name",
    errormessage: "Username should be between 3-16 characters and Should not include any special Characters",
    label: "UserName",
    pattern: "John",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    errormessage: "It should be valid Email!",
    label: "Email",
    required: true
  },
  {
    id: 3,
    name: "birthday",
    type: "date",
    placeholder: "Enter your Birthday",
    label: "BirthDay",


  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Enter your Password",
    errormessage: "Password should be 8-20 characters and should include atleast 1 letter, 1 number and 1 special character",
    label: "Password",
    pattern:"^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,20}$",
    required: true
  },
  {
    id: 5,
    name: "confirmpassword",
    type: "password",
    placeholder: "Confirm your Password",
    errormessage: "passowords font match",
    label: "Password",
    pattern: values.password,
    required: true
  },
  ]
  // const usernameRef = useRef()
  // console.log(usernameRef);

  // console.log("re-rendered")
  const handleSubmit = (e) => {
    e.preventDefault()
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))

  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  console.log(values)
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}


        <button>Submit</button>

      </form>
    </div>
  )
}

export default App
