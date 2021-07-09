import Button from '@material-ui/core/Button';

const detailStyle={
  display : 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}

const buttonStyle={
  background: 'var(--theme-page-elements)',
  color: 'var(--theme-page-text)',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  width: '10%'
}

function Countrydetail({country}){
  console.log(country);
  console.log(country.name);
  return (
    <div className="country-page">
      <img src={country.flag} alt="Flag" style={{width:'100%',height:'100%'}}/>
      <div className="detail-box" style={detailStyle}>
        <h1>{country.name}</h1>
        <div className="basic-details">
          <div className="detail-1">
          <p><b>Native Name :</b> {country.nativeName}</p>
          <p><b>Population :</b> {country.population}</p>
          <p><b>Region :</b> {country.region}</p>
          <p><b>Sub Region :</b> {country.subregion}</p>
          <p><b>Capital :</b> {country.capital}</p>
          </div>
          <div className="detail-2">
            <p><b>Top Level Domain :</b> {country.topLevelDomain} </p>
            <p><b>Currency :</b> {country.name} </p>
            <p><b>Languages :</b>  {country.name} </p>
          </div>
        </div>
        <div className="border-countries">
          <b>Border Countries : &nbsp;&nbsp;</b>
          <Button style={buttonStyle}>CHINA</Button>
        </div>
      </div>
    </div>
  );
}

export default Countrydetail;