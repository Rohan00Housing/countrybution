function Header({toggleTheme}){
  return(
    <div className="heading">
      <h2>where in the world?</h2>
      <p style={{fontWeight: '550',fontSize: '14px'}} onClick={toggleTheme}>Dark Mode</p>
    </div>
  );
}

export default Header;