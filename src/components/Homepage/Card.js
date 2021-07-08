import { useHistory } from "react-router-dom";

function Card({country}){
  const history = useHistory();

  function handleClick() {
    history.push(`/${country.name}`);
  }

  return(
    <div className="card" onClick={handleClick}>
      <img src={country.flag} alt="Flag" style={{width:'100%'}}/>
      <div className="card-content">
        <h3 style={{marginBottom:'5%',paddingLeft:'3%'}}><b>{country.name}</b></h3>
        <p><b>Population : </b>{country.population}</p>
        <p><b>Region : </b>{country.region}</p>
        <p><b>Capital : </b>{country.capital}</p>
      </div>
    </div>
  );
}

export default Card;