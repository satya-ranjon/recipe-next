const Button = ({ variant, className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={` ${className} p-3 py-2 rounded-md  font-bold  duration-200 transition-all ${
        variant
          ? "bg-orange-400 text-white"
          : "border-orange-200 text-orange-400 hover:bg-orange-50 border-2"
      }`}>
      {children}
    </button>
  );
};

export default Button;
