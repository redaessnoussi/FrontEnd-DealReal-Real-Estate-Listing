function ButtonLg({ className, children, type, onClick }) {
  return (
    <button
      className={`flex items-center border-2 px-7 rounded-lg h-12 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonLg;
