function ButtonLg({ className, children }) {
  return (
    <button
      className={`flex items-center border-2 px-8 rounded-lg h-12 ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonLg;
