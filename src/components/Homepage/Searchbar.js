import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const inputStyles = {
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)',
  background: 'var(--theme-page-elements)',
  color: 'var(--theme-page-text)',
  borderColor: 'var(--theme-page-elements)',
  fontFamily: 'FontAwesome',
  fontSize: '18px',
  paddingLeft: '3%'
}

const buttonStyles = {
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)',
  background: 'var(--theme-page-elements)',
  color: 'var(--theme-page-text)',
  borderColor: 'var(--theme-page-elements)'
}

function Searchbar({changeRegion,changeCountry}){
  const classes = useStyles();
  const [region, setRegion] = useState('');
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return(
    <div className="searchbar">
      {/* <input placeholder="   &#xF002;      Search for a country..." style={inputStyles}
        onChange= {(Event) => {changeCountry(Event.target.value)}}
      /> */}

    <input className="form-control me-2" 
      type="search" 
      id="search-country-box"
      placeholder="&#xF002;     Search for a country..." 
      aria-label="Search" 
      style={inputStyles} 
      onChange= {(Event) => {changeCountry(Event.target.value)}}
    />

      {/* <FormControl  className={classes.formControl}>
        <InputLabel>Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={region}
          onChange={handleChange}
          label="Filter by Region"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'All'} onClick= {()=>{changeRegion('All')}}>All</MenuItem>
          <MenuItem value={'Africa'} onClick= {()=>{changeRegion('Africa')}}>Africa</MenuItem>
          <MenuItem value={'America'} onClick= {()=>{changeRegion('America')}}>America</MenuItem>
          <MenuItem value={'Asia'} onClick= {()=>{changeRegion('Asia')}}>Asia</MenuItem>
          <MenuItem value={'Europe'} onClick= {()=>{changeRegion('Europe')}}>Europe</MenuItem>
          <MenuItem value={'Oceania'} onClick= {()=>{changeRegion('Oceania')}}>Oceania</MenuItem>
        </Select>
      </FormControl> */}
    <div className="nav-item dropdown" id="region-filter">
                <a className="nav-link dropdown-toggle btn btn-light" 
                  type="button" 
                  style={buttonStyles}
                  id="navbarDropdown"
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
                  Filter by Region
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={buttonStyles}>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('All')}} >All</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('Africa')}} >Africa</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('America')}} >America</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('Asia')}} >Asia</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('Europe')}} >Europe</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('Oceania')}} >Oceania</a></li>
                </ul>
                </div>
    </div>
  );
}

export default Searchbar;