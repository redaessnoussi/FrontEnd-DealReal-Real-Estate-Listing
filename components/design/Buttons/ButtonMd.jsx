function ButtonMd({ className, children, type, onClick }) {
  return (
    <button
      className={`px-8 h-9 border-2 rounded-lg ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonMd;
