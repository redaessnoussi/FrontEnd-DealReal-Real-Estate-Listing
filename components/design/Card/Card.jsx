function Card({ children, className }) {
  return (
    <div
      className={`relative flex flex-col min-w-0 break-words hover:shadow-md transition-shadow rounded-lg w-full h-full ${
        className ? className : ""
      }`}
    >
      {/* card body */}
      <div className="flex-auto p-4">{children}</div>
    </div>
  );
}

export default Card;
