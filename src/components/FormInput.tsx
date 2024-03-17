type inputProps = {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
  placeholder: string;
};

function FormInput({
  label,
  name,
  type,
  defaultValue,
  placeholder,
}: inputProps) {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered "
      />
    </div>
  );
}
export default FormInput;
