import React, {useContext, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {MyContext} from '../Context/ContextProvicer'
import Progress from '../Spinner/Progress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
      
  },
  navBar:{
    backgroundColor: '#3299CC'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    color: '#FFFFFF'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const  {countries :{countries}, country, getCountries, getCountry, getCountryData} = useContext(MyContext)

   useEffect(() => {
    getCountries()
   }, [])

  const handleChange = (event) => {
    getCountry(event.target.value)
    getCountryData(event.target.value)
  };
  if(!countries){
    return (<Progress/>)
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {country ? country : 'World'} Covid - 19
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
            value={country}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
            >
            <MenuItem value="" disabled>
                Country
            </MenuItem>
            {console.log(countries)}
            {countries.length > 0 && countries.map((item, index)=>{
              return (<MenuItem  key={index} value={item.name}>{item.name}</MenuItem>)
            })}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
}
