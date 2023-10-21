function ButtonSm({ className, children, type, roundedBtn = false }) {
  return (
    <button
      className={
        roundedBtn
          ? `w-10 h-10 flex justify-center items-center border-2 rounded-full ${className}`
          : `px-4 h-9 border-2 rounded-lg ${className}`
      }
      type={type}
    >
      {children}
    </button>
  );
}

export default ButtonSm;

//w-10 h-10 flex justify-center items-center border-2 rounded-full ${className}
