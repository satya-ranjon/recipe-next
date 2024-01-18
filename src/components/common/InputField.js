const InputField = ({
  label,
  name,
  value,
  onChange,
  textarea = false,
  ...props
}) => {
  return (
    <div className=" text-xl text-neutral-800 space-y-1">
      <label htmlFor={name} className=" font-semibold">
        {label} :
      </label>
      {textarea ? (
        <textarea
          {...props}
          value={value}
          onChange={onChange}
          name={name}
          id={name}
          rows="6"
          cols="50"
          className="w-full text-sm font-normal bg-orange-50 outline-none p-2 placeholder:font-normal placeholder:text-sm"
          type="text"
        />
      ) : (
        <input
          {...props}
          value={value}
          onChange={onChange}
          name={name}
          id={name}
          className="w-full text-sm font-normal bg-orange-50 outline-none p-2 placeholder:font-normal placeholder:text-sm"
          type="text"
        />
      )}
    </div>
  );
};

export default InputField;
