import "./FormInput.css"
const FormInput = (props) => {
    const { label, id, onChange, ...inputProps } = props;
    return (
        <div className="form_inputs">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} />
        </div>
    )
}

export default FormInput