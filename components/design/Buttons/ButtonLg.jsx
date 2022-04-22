function ButtonLg({ className, children, type }) {
  return (
    <button
      className={`flex items-center border-2 px-7 rounded-lg h-12 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default ButtonLg;
