function ButtonMd({ className, children, text }) {
  return (
    <button className={`font-bold px-8 h-9 border-2 rounded-lg ${className}`}>
      {children}
    </button>
  );
}

export default ButtonMd;
