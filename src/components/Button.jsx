const Button = (props) => {
  return (
    <>
      <button
        className="border-2 border-slate-400 p-1 rounded cursor-pointer"
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
