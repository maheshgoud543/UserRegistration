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
    label: "UserName"
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Enter your email",
    label: "Email"
  },
  {
    id: 3,
    name: "birthday",
    type: "birthday",
    placeholder: "Enter your Birthday",
    label: "BirthDay"
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Enter your Password",
    label: "Password"
  },
  {
    id: 5,
    name: "confirmpassword",
    type: "password",
    placeholder: "Confirm your Password",
    label: "Password"
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
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}


        <button>Submit</button>

      </form>
    </div>
  )
}

export default App
