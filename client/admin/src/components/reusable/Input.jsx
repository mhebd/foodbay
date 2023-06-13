function Input({
  className,
  id,
  type,
  onChange,
  value,
  placeholder,
  required,
  name,
}) {
  return (
    <input
      className={className}
      id={id}
      type={type}
      name={name}
      onChange={(e) => onChange(e)}
      value={value}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default Input;
