function ButtonSm({ className, children, type }) {
  return (
    <button className={`px-4 h-9 border-2 rounded-lg ${className}`} type={type}>
      {children}
    </button>
  );
}

export default ButtonSm;
