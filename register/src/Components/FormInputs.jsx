import "./FormInput.css"
const FormInput = (props) => {
    return (
        <div className="form_inputs">
            {/* <label>UserName</label> */}
            <input placeholder={props.placeholder} name={props.name} />
        </div>
    )
}

export default FormInput