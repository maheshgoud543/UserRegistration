import { useRef, useState } from 'react'
import './App.css'
import FormInput from './Components/FormInputs'
function App() {
  const [username, setUserName] = useState("")
  // const usernameRef = useRef()
  // console.log(usernameRef);

  console.log("re-rendered")
  const handleSubmit = (e) => {
    e.preventDefault()
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))

  }
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <FormInput name="UserName" placeholder="UserName" />
        <FormInput name="Email" placeholder="Email" />
        <FormInput name="Password" placeholder="Password" />
        <FormInput name="Confirm Password" placeholder="Confirm Password" />
        <button>Submit</button>

      </form>
    </div>
  )
}

export default App
