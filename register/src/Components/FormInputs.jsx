import "./FormInput.css"
const FormInput = (props) => {
    const { label,errormessage, id, onChange, ...inputProps } = props;
    return (
        <div className="form_inputs">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} />
            <span>{errormessage}</span>
        </div>
    )
}

export default FormInput