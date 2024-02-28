import { useState } from "react";
import "./FormInput.css"
const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errormessage, id, onChange, ...inputProps } = props;

    const handlefocused = (e) => {
        setFocused(true);
    }


    return (
        <div className="form_inputs">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handlefocused} onFocus={() => {
                inputProps.name === "confirmpassword" && setFocused(true)
            }} focused={focused.toString() } />
            <span>{errormessage}</span>
        </div>
    )
}

export default FormInput