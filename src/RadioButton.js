function RadioButton(props) {
    const { label, name, checked, onChange } = props
    console.log(label, name)
    return (
        <label>
            <input 
                type='radio'
                name={name}
                checked={checked}
                onChange={onChange}
            />
            {label}
        </label>
    )
}

export default RadioButton