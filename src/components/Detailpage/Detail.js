import Button from '@material-ui/core/Button';
import { useHistory,useParams } from "react-router-dom";
import Countrydetail from './Countrydetail';
import {useEffect, useState} from "react";

function Detail(){
  const {countryName} = useParams();
  const [country, setCountry] = useState({});
  const [hasError, setHasError] = useState(false);
  let url =  `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`

  useEffect(() => {
    fetch(url)
      .then ((res)=>{
        console.log("status",res.status)
        if (res.ok){
          setHasError(false)
          res.json()
          .then(res => {
            setCountry(res[0])

          })
        }else{
          setCountry(null)
          setHasError(true)
        }

      }).catch(error =>{
        setHasError(true)
      });

  },[]);

  const buttonStyle={
    background: 'var(--theme-page-elements)',
    color: 'var(--theme-page-text)',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '10%',
    marginBottom: '5%'
  }

  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return(
    <div className="country-details">
      <Button style={buttonStyle} onClick={handleClick}>BACK</Button>
      <Countrydetail country={country} />
    </div>
  );
}

export default Detail;