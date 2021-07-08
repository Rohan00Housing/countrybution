import Card from "./Card";
import React, {useState, useEffect} from "react";
import Searchbar from "./Searchbar";

function Home(){
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState(null);
  const [region, setRegion] = useState(null);
  const [url, setUrl] = useState("https://restcountries.eu/rest/v2/all");
  const [hasError, setHasError] = useState(false)

  
  const changeRegion = (region) =>{
    if (region !== "All"){
      setRegion(region)
      setUrl(`https://restcountries.eu/rest/v2/region/${region}`);
    }else{
      setRegion(null)
      setUrl("https://restcountries.eu/rest/v2/all");
    }
    console.log(region)
  }

  const changeCountry = (country) =>{
    console.log(country)
    if(!country){
      setUrl("https://restcountries.eu/rest/v2/all");
    }else{
      setSearch(country)
      setUrl(`https://restcountries.eu/rest/v2/name/${country}`);
    }

  }

  //componentDidMount
  useEffect(() => {
    console.log("hook called",url)
    // fetch(url)
    // .then(res => res.json())
    // .then(res => {
    //   setCountries(res);
      
    // })
    
    fetch(url)
    .then ((res)=>{
      console.log("status",res.status)
      if (res.ok){
        setHasError(false)
        res.json()
        .then(res => {
          setCountries(res)

        })
      }else{
        setCountries(null)
        setHasError(true)
      }

    }).catch(error =>{
      setHasError(true)
    });

  },[region,search]);

  return(
    <div className="homepage">
      <Searchbar changeRegion={changeRegion} changeCountry={changeCountry}/>
      {/* <Card country={ind} />
      <Card country={ind} />
      <Card country={ind} />
      <Card country={ind} />
      <Card country={ind} /> */}
      {
          !countries ? <div>No Country Found...</div> : 
          countries.map((country) => {
            return <Card country={country}/>
          })
        }
    </div>
  )
}

export default Home;