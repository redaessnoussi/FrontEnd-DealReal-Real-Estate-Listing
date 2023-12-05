function HeroPage({ children, className }) {
  return (
    <div className={`bg-infield-800 ${className}`}>
      <div className="container lg:px-60 py-24 mx-auto text-center px-7">
        {children}
      </div>
    </div>
  );
}

export default HeroPage;
