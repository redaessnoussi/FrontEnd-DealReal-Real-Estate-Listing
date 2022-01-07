function ButtonSm({ className, children, text }) {
  return (
    <button className={`font-bold px-4 h-9 border-2 rounded-lg ${className}`}>
      {children}
    </button>
  );
}

export default ButtonSm;
