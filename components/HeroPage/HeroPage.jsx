function HeroPage({ children }) {
  return (
    <div className="bg-infield-800">
      <div className="container lg:px-60 py-24 mx-auto text-center px-10">
        {children}
      </div>
    </div>
  );
}

export default HeroPage;
